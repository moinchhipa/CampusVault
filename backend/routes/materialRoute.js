const express = require("express");
const router = express.Router();
const materialController = require("../controllers/materialController");
const upload = require("../middleware/uploadMiddleware");
const verifyUpload = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware")

router.post("/upload", verifyUpload, upload.single("file"), materialController.uploadMaterial);

module.exports = router;
