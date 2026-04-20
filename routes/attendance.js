const express = require("express");
const router = express.Router();
const db = require("../db");

// Mark Attendance
router.post("/", (req, res) => {
  const { member_id, status } = req.body;

  const query = "INSERT INTO attendance (member_id, date, status) VALUES (?, CURDATE(), ?)";
  
  db.query(query, [member_id, status], (err, result) => {
    if (err) throw err;
    res.send("Attendance marked");
  });
});

module.exports = router;