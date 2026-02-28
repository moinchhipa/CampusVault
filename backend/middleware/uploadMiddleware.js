// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("../config/cloudinary");

// // Stable Cloudinary storage config
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "campus-vault",
//     resource_type: "raw", // required for PDF
//   },
// });

// // File filter (PDF only)
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "application/pdf") {
//     cb(null, true);
//     console.log("File received:", req.file)
//   } else {
//     cb(new Error("Only PDF files are allowed"), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 15 * 1024 * 1024,
//   },
// });

// module.exports = upload;

// const multer = require("multer");

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: { fileSize: 15 * 1024 * 1024 },
// });

// module.exports = upload;

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(), // store file in memory
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

module.exports = upload;