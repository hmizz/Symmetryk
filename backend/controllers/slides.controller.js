var db = require("../database/db");
const { QueryTypes } = require("sequelize");

module.exports.getSlidesPerPresentation = async function (results, limit, offset) {
  for (let presentation of results) {
    await db.query(
      "SELECT idialog_slide.id, idialog_slide.image_id, idialog_slide.html_id, idialog_slide.required, idialog_slide.emailable" +
        " FROM idialog_slide, idialog_presentation_has_slide WHERE idialog_slide.id = idialog_presentation_has_slide.slide_id AND idialog_presentation_has_slide.presentation_id=?",
      { replacements: [presentation.id], type: QueryTypes.SELECT }
    )
      .then(async (slides) => {
        await this.getThumbs(slides);
        presentation.slides = slides;
      });
  }
  return results ;
}

module.exports.getThumbs = async function(slides){
  for(let slide of slides){
    if(slide.image_id == null)
    await db.query(
      "SELECT zip_id, cdnURL FROM aws_file, idialog_html, idialog_slide" +
      " WHERE idialog_html.id = ? AND idialog_html.thumb_id= aws_file.id",
      { replacements: [slide.html_id], type: QueryTypes.SELECT }
    )
    .then((url) => {
      slide.thumbURL = url.cdnURL;
      slide.contentId = url.zip_id;
    });
    else{
      await db.query(
        "SELECT idialog_image.image_id,cdnURL FROM aws_file, idialog_image, idialog_slide" +
        " WHERE idialog_image.id = ? AND idialog_image.thumb_id= aws_file.id",
        { replacements: [slide.image_id], type: QueryTypes.SELECT }
      )
      .then((url) => {
        slide.thumbURL = url.cdnURL;
        slide.contentId = url.image_id;
      });
    }
  }
}


