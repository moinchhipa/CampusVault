const Material = require("../models/Material");

exports.uploadMaterial = async (req, res) => {
  res.json({ message: "protected route working" });
  console.log(req.user);

  //   try {
  //     const fileUrl = req.file.path;

  //     const material = new Material({
  //       title: req.body.title,
  //       department: req.body.department,
  //       semester: req.body.semester,
  //       subject: req.body.subject,
  //       type: req.body.type,
  //       fileUrl: fileUrl,
  //       uploadedBy: req.user.id,
  //       status: "pending",
  //     });

  //     await material.save();
  //     res
  //       .status(201)
  //       .json({ message: "Material uploaded successfully", material });
  //   } catch (e) {
  //     console.log(e);
  //   }
};
