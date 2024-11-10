const express = require('express');
const userRoute = require('./userRoutes');
const chatRoute = require('./chatRoutes');

const router = express.Router();

router.use("/users", userRoute);
router.use("/chats", chatRoute);

module.exports = router;