const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const verifyUpload = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/adminMiddleware")

router.get("/usermaterial", verifyUpload, verifyAdmin, adminController.usermaterial);

router.patch("/:id", verifyUpload, verifyAdmin, adminController.approve);

router.delete("/:id", verifyUpload, verifyAdmin, adminController.reject);

module.exports = router;