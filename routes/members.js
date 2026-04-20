const express = require("express");
const router = express.Router();
const db = require("../db");

// Add Member
router.post("/", (req, res) => {
  const { name, age, phone, plan } = req.body;
  const query = "INSERT INTO members (name, age, phone, plan, join_date) VALUES (?, ?, ?, ?, CURDATE())";

  db.query(query, [name, age, phone, plan], (err, result) => {
    if (err) throw err;
    res.send("Member added");
  });
});

// Get Members
router.get("/", (req, res) => {
  db.query("SELECT * FROM members", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;