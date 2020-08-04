const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.controller");

router.post("/login", controller.userLogin);
router.get("/profile/:id", controller.userProfile);
router.get("/allusers", controller.allUsers);
router.patch("/:id/logout",controller.logout)

module.exports = router;