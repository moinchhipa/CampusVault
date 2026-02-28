const express = require("express");
const app = express();
dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const authRoute = require("./routes/auth");
const materialRoutes = require("./routes/materialRoute");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/material", materialRoutes);

app.get("/", (req, res) => {
  res.send("root is working");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("Failed to connect DB");
  });

app.use((err, req, res, next) => {
  console.error("Global error:", err);

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      message: "File too large (Max 15MB)",
    });
  }

  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:5000");
});
