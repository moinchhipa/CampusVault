const Material = require("../models/Material");

exports.usermaterial = async (req, res) => {
  try {
    const materials = await Material.find({ uploadedBy: req.user.id })
      .populate("uploadedBy", "username")
      .sort({ createdAt: -1 });
    res.json(materials);
  } catch (e) {
    res.status(401).json({ message: "failed to fetch user material" });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await Material.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: "Failed to delete" });
  }
};