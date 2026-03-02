const Material = require("../models/Material");

exports.usermaterial = async (req, res) => {
  try {
    const materials = await Material.find({ status: "pending" })
      .populate("uploadedBy", "username")
      .sort({ createdAt: -1 });
    res.json(materials);
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch materials" });
  }
};

exports.approve = async (req, res) => {
  try {
    const { id } = req.params;
    await Material.findByIdAndUpdate(id, { status: "approved" });
    res.json({ message: "Material approved successfully" });
  } catch (e) {
    res.status(500).json({ message: "Failed to approve" });
  }
};

exports.reject = async (req, res) => {
  try {
    const { id } = req.params;
    await Material.findByIdAndUpdate(id, { status: "pending" });
    res.json({ message: "Material rejected successfully" });
  } catch (e) {
    res.status(500).json({ message: "Failed to reject" });
  }
};
