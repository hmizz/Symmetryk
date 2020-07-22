const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.controller");

router.post("/login", controller.userLogin);
// router.get("/profile/:id", userController.userProfile);
router.get("/allusers", controller.allUsers);

module.exports = router;