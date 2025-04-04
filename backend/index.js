const fs = require("fs/promises");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/meals", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "meals.json");

    console.log("File path being used:", filePath); // Log the path for debugging
    
    const data = await fs.readFile(filePath, "utf8");
    const meals = JSON.parse(data);
    res.json(meals);
  } catch (error) {
    console.error("Error reading the meals data:", error);
    res.status(500).json({
      message: "Server error while reading meals data",
      error: error.message,
      stack: error.stack // Optionally include stack trace for more debugging info
    });
  }
});


app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3001, () => {
  console.log("Web server is connected at port 3001");
});
