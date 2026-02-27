const isAdmin = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    console.log(req.user.role)

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied, Admin only." });
    }

    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = isAdmin;