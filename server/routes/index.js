const express = require('express');
const userRoute = require('./userRoutes');
const chatRoute = require('./chatRoutes');
const messageRoute = require('./messageRoutes');

const router = express.Router();

router.use("/users", userRoute);
router.use("/chats", chatRoute);
router.use("/message", messageRoute);

module.exports = router;