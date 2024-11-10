const express = require("express");
const controller = require("../controller/ChatController")

const router = express.Router();

router.post("/", controller.createChat);
router.get("/:userId", controller.findUserChats);
router.get("/:firstId/:secondId", controller.findChats);

module.exports = router;