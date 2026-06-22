const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/api/server/health", (req, res) => {
  res.json({ message: "Server is healthy working!" });
});

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/google-auth", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
