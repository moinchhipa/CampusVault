const express = require("express");
const router = express.Router();
const { uploadMaterial } = require("../controllers/materialController");
const upload = require("../middleware/uploadMiddleware");
const verifyUpload = require("../middleware/authMiddleware");

router.post("/upload", verifyUpload, upload.single("file"), uploadMaterial);

module.exports = router;
