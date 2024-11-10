const express = require("express");
const controller = require("../controller/UserController")

const router = express.Router();

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/:userId", controller.getUserById);
router.get("/", controller.getAllUsers);

module.exports = router;