const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const VerifyToken = require("../middleware/authMiddleware")

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/fetchuser").get(VerifyToken, authController.fetchuser)

module.exports = router;
