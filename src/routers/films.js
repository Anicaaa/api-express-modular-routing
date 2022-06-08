// Import data here...
const express = require("express");
const router = express.Router();

const { films } = require("../../data");
let id = films.length;

// Write routes here...

// GET all films
router.get("/", (req, res) => {
  res.json({ films });
});

// GET single film id
router.get("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  res.json({ film });
});

// POST or CREATE a new film
router.post("/", (req, res) => {
  id++;
  const film = { ...req.body, id: id };
  films.push(film);
  res.json({ film });
});

// DELETE film id 3
router.delete("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  films.splice(films.indexOf(book), 1);
  res.json({ film });
});

// PUT or UPDATE a film id
router.put("/:id", (req, res) => {
  const film = films.find((item) => item.id === Number(req.params.id));
  film.director = req.body.director;
  res.json({ film });
});

module.exports = router;
