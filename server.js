const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const memberRoutes = require("./routes/members");
const attendanceRoutes = require("./routes/attendance");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/members", memberRoutes);
app.use("/attendance", attendanceRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});