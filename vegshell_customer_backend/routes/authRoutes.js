const Router = require("express").Router();
const authController = require("../controllers/authController.js");

Router.post("/register", authController.createUser);
//Router.post("/sendOtp", authController.otpSend);
//Router.post("/verifyOtp", authController.verifyOtp);
Router.post("/login", authController.loginUser);
module.exports = Router;
