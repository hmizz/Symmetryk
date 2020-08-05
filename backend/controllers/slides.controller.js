const db = require("../database/db");
const { QueryTypes } = require("sequelize");
const Image = require("../database/models/idialog_image");
const Html = require("../database/models/idialog_html");
const awsController = require("../controllers/awsfiles.controller");


module.exports.getSlidesPerPresentation = async function (results) {
  for (let presentation of results) {
    await db.query(
      "SELECT idialog_slide.id, idialog_slide.image_id, idialog_slide.html_id, idialog_slide.required, idialog_slide.emailable, idialog_presentation_has_slide.index" +
        " FROM idialog_slide, idialog_presentation_has_slide WHERE idialog_slide.id = idialog_presentation_has_slide.slide_id AND idialog_presentation_has_slide.presentation_id=?",
      { replacements: [presentation.id], type: QueryTypes.SELECT }
    )
      .then(async (slides) => {
        await this.getThumbsId(slides);
        await awsController.getThumbsURL(slides);
        presentation.slides = slides;
      });
  }
  return results ;
}

module.exports.getSlidesOnScroll = async function (presentationId, limit, offset) {
    await db.query(
      "SELECT idialog_slide.id, idialog_slide.image_id, idialog_slide.html_id, idialog_slide.required, idialog_slide.emailable" +
        " FROM idialog_slide, idialog_presentation_has_slide WHERE idialog_slide.id = idialog_presentation_has_slide.slide_id AND idialog_presentation_has_slide.presentation_id=? LIMIT ? OFFSET ?",
      { replacements: [presentationId,limit, offset], type: QueryTypes.SELECT }
    )
      .then(async (slides) => {
        await this.getThumbsId(slides);
        await awsController.getThumbsURL(slides);
        return slides;
      })
      .catch((err) => {
        console.log(err);
        return;
    });
}

module.exports.getThumbsId = async function(slides){
  if(slides == [])
    return ;
  for(let slide of slides){
    if(slide.image_id == null){
      await Html.findByPk(slide.html_id)
      .then((htmlData) => {
        slide.thumb_id = htmlData.thumb_id;
        slide.content_id = htmlData.zip_id;
      })
      .catch((err) => {
        console.log(err);
        return;
    });
    }
    else{
      await Image.findByPk(slide.image_id)
      .then((imageData) => {
        slide.thumb_id = imageData.thumb_id;
        slide.content_id = imageData.image_id;
      })
      .catch((err) => {
        console.log(err);
        return;
    });
    }
  }
}


module.exports.getThumbs = async function(slides){
  if(slides == [])
  return ;
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


