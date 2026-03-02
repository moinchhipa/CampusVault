const express = require("express");
const router = express.Router();
const usermaterialcontroller = require("../controllers/usermaterialcontroller");
const verifyUpload = require("../middleware/authMiddleware");

router.get("/usermaterial", verifyUpload, usermaterialcontroller.usermaterial);

router.delete("/:id", verifyUpload, usermaterialcontroller.deleteById);

module.exports = router;