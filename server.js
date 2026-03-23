const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quizapp"
});

db.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});


// ---------------- LOGIN API ----------------
app.post("/login", (req, res) => {

  const { name, id } = req.body;

  console.log("Login Data:", name, id);

  const sql = "INSERT INTO login_students (student_name,student_id) VALUES (?,?)";

  db.query(sql, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Login Saved");
    }
  });

});


// ---------------- NEW USER REGISTER ----------------
app.post("/register", (req, res) => {

  const { name, id, school, className, email } = req.body;

  console.log("Register Data:", name, id, school, className, email); 

  const sql = "INSERT INTO new_users (name,student_id,school,class,email) VALUES (?,?,?,?,?)";

  db.query(sql, [name, id, school, className, email], (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("User Registered");
    }
  });

});


// ---------------- EXISTING USER ----------------
app.post("/existingUser", (req, res) => {

  const { name, id, email } = req.body;

  console.log("Existing User:", name, id, email);

  const sql = "INSERT INTO existing_users (name,student_id,email) VALUES (?,?,?)";

  db.query(sql, [name, id, email], (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Existing User Saved");
    }
  });

});


// ---------------- SAVE QUIZ RESULT ----------------
app.post("/saveResult", (req, res) => {

  const { student_id, subject, score, total, percentage } = req.body;

  console.log("Result:", student_id, subject, score);

  const sql = "INSERT INTO quiz_results (student_id,subject,score,total_questions,percentage) VALUES (?,?,?,?,?)";

  db.query(sql, [student_id, subject, score, total, percentage], (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Result Saved");
    }
  });

});


// SERVER START
app.listen(5000, () => {
  console.log("Server running on port 5000");
});