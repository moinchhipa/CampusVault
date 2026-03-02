const Material = require("../models/Material");

exports.uploadMaterial = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log("File info:", {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    const material = new Material({
      title: req.body.title,
      department: req.body.department,
      semester: req.body.semester,
      subject: req.body.subject,
      type: req.body.type,
      fileUrl: req.file.path, // Cloudinary URL directly
      uploadedBy: req.user.id,
      status: "pending",
    });

    await material.save();

    res.status(201).json({
      message: "Uploaded successfully",
      material,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Upload failed" });
  }
};

exports.fetchMaterial = async (req, res) => {
  try {
    const filter = { status: "approved" };
    if (req.query.department) filter.department = req.query.department;
    if (req.query.semester)
      filter.semester = Number(req.query.semester) || req.query.semester;
    if (req.query.type) filter.type = req.query.type;

    const materials = await Material.find(filter)
      .populate("uploadedBy", "username")
      .sort({ createdAt: -1 });
    res.json(materials);
  } catch (e) {
    console.log(e);
    res.json({ message: "Failed to fetch documets" });
  }
};

exports.fetchbyid = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    res.json(material);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};
