const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

console.log("Cloudinary config:", {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY ? "Loaded" : "Missing",
  api_secret: process.env.API_SECRET ? "Loaded" : "Missing",
});

module.exports = cloudinary;