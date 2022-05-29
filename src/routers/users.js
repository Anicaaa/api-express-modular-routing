const express = require("express");
const router = express.Router();

const { users } = require("../../data");
let id = users.length;

// GET all users
router.get("/", (req, res) => {
  res.json({ users });
});

// GET single user id
router.get("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  res.json({ user });
});

// POST or CREATE a new user
router.post("/", (req, res) => {
  id++;
  const user = { ...req.body, id: id };
  users.push(user);
  res.json({ user });
});

// DELETE user id 4
router.delete("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  users.splice(users.indexOf(user), 1);
  res.json({ user });
});

// PUT  or UPDATE a user id
router.put("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  user.email = req.body.email;
  res.json({ user });
});

module.exports = router;
