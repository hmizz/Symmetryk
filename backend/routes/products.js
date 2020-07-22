const express = require("express");
const router = express.Router();
const controller = require("../controllers/products.controller");

router.get("/productsList/:id", controller.getProducts);

// router.get("/allProducts", productController.allProducts);

module.exports = router;