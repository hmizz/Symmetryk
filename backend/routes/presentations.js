const express = require("express");
const router = express.Router();
const controller = require("../controllers/presentations.controller");

router.get("/list/:productId", controller.Presentations);

module.exports = router;