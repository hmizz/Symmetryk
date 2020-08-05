const Product = require("../database/models/idialog_product");
const db = require("../database/db");
const { QueryTypes } = require('sequelize');
const awsFileController =require("../controllers/awsfiles.controller");

module.exports.getProducts = async function (req, res) {
  await db.query("SELECT idialog_product.id, thumb_id, name FROM idialog_product, idialog_users_has_products" +
  " WHERE idialog_users_has_products.user_id=? AND idialog_product.id=idialog_users_has_products.product_id",
  {replacements: [req.params.id],
  type: QueryTypes.SELECT
  })
  .then( async (results) => {   
    if(results == null)
    return res.status(404).json({
      message: "Not Found"});
      await awsFileController.getThumbsURL(results);
      res.status(200).json({
        products: results
    });
    console.log(results);
  }).catch((err)=>{
    console.log(err);
res.status(500).json({
  error: "Server Failed"
});
});
}

module.exports.allProducts = function (req, res) {};
