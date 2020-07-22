var db = require("../database/config");

module.exports.slidesPerPresentation = function (req, res) {
const slidesPerPresentations =
    "SELECT idialog_slide.id, idialog_slide.image_id, idialog_slide.html_id, idialog_slide.required, idialog_slide.emailable FROM idialog_slide, idialog_presentation_has_slide WHERE idialog_slide.id = idialog_presentation_has_slide.slide_id AND idialog_presentation_has_slide.presentation_id=?";

db.query(slidesPerPresentations,[req.params.presentationId], function (err, results) {
    if (err) {
    console.log(error);
    return;
    }
    if (results.length == 0) {
    console.log("no products assigned");
    return res.status(401).json({
        message: "No presentations assigned",
    });
    }
    res.status(200).json({
        slides: results
    });
  });
};
