var db = require("../database/db");
const { QueryTypes } = require("sequelize");

module.exports.getSlidesPerPresentation = async function (results) {
  for (let presentation of results) {
    await db.query(
      "SELECT idialog_slide.id, idialog_slide.image_id, idialog_slide.html_id, idialog_slide.required, idialog_slide.emailable" +
        " FROM idialog_slide, idialog_presentation_has_slide WHERE idialog_slide.id = idialog_presentation_has_slide.slide_id AND idialog_presentation_has_slide.presentation_id=?",
      { replacements: [presentation.id], type: QueryTypes.SELECT }
    )
      .then((slides) => {
          
         presentation.slides = slides;
      });
  }
  return results ;
}
