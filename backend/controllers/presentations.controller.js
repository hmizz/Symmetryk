const db = require("../database/db");
const { QueryTypes } = require("sequelize");
const presentation = require("../database/models/idialog_presentation");
const slide = require("../database/models/idialog_slide");
const slideController = require("./slides.controller");
module.exports.Presentations = async function (req, res) {
  db.query(
    "SELECT id, name, type, created_at, updated_at FROM idialog_presentation WHERE product_id=?",
    { replacements: [req.params.productId], type: QueryTypes.SELECT }
  )
    .then((results) => {
    if (results == null)
        return res.status(404).json({
        message: "Not Found",
        });
        slideController.getSlidesPerPresentation(results).then((x)=>{
            return res.status(200).json({
            presentations: x 
        });
    });
    })
    .catch((err) => {
    console.log(err);
    res.status(500).json({
        error: "Server Failed",
    });
    });
};
