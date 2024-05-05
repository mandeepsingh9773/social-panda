const express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
var cors = require("cors");
const app = express();
const port = 8000; // Define your desired port

// Middleware to parse JSON requests
app.use(express.json(), cors());
const url = process.env.MONGODB_URL; // Replace with your MongoDB url and database name

//connecting MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => console.log("Connected"));

// Example route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express app!");
});

//user route
const userRoute = require("./routes/userRoute");
app.use("/user", userRoute, cors());

//post route
const postRoute = require("./routes/postRoute");
app.use("/post", postRoute, cors());

//comment Route
const commentRoute = require("./routes/commentRoute");
app.use("/comment", commentRoute, cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
