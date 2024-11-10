const express = require("express");
const controller = require("../controller/messageController");

const router = express.Router();

router.post("/", controller.createMessage);
router.get("/:chatId", controller.findMessage);

module.exports = router;