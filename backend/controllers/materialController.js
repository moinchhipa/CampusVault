const Material = require("../models/Material");
const cloudinary = require("../config/cloudinary");

const uploadFromBuffer = (fileBuffer, filename) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "campus-vault",
        resource_type: "auto", // ← CHANGE THIS
        public_id: Date.now() + "-" + filename,
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Error:", error);
          return reject(error);
        }
        console.log("Cloudinary Uploaded:", result.secure_url);
        resolve(result);
      },
    );

    stream.end(fileBuffer);
  });
};

exports.uploadMaterial = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("User:", req.user);
    console.log("File received:", req.file.originalname);

    // FIXED CALL
    const result = await uploadFromBuffer(
      req.file.buffer,
      req.file.originalname,
    );

    console.log("Cloudinary result:", result.secure_url);

    const material = new Material({
      title: req.body.title,
      department: req.body.department,
      semester: req.body.semester,
      subject: req.body.subject,
      type: req.body.type,
      fileUrl: result.secure_url,
      uploadedBy: req.user.id,
      status: "pending",
    });

    console.log("Material object:", material);

    await material.save();

    console.log("Saved to DB");

    res.status(201).json({
      message: "Material uploaded successfully",
      material,
    });
  } catch (e) {
    console.error("Upload Error:", e);
    res.status(500).json({
      message: "Upload failed",
    });
  }
};
