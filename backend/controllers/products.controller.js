const db = require("../database/db");

const Product = db.product;

module.exports.getProducts = function (req, res) {
  Product.findAll({
    attributes: ["id", "home_thumb_id", "name"],
  }).then((results) => {
    if(results == null)
    return res.status(404).json({
      message: "Not Found"});
      res.status(200).json({
        results: results
    });
    console.log(results);
  }).catch((err)=>{
res.status(500).json({
  error: "Server Failed"
});
});
};

module.exports.allProducts = function (req, res) {};
