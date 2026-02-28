const jwt = require("jsonwebtoken");

const verifyUpload = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({ message: "NO Token, acces denied" });
    }
    const parts = authHeader.split(" ");
    const token = parts[1];

    console.log("Token:", token);

    if (!token) {
      return res.json({ message: "Invadid token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    return res.json({message: "token is not valid"})
  }
};

module.exports = verifyUpload;