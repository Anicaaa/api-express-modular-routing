// Import data here...
const express = require("express");
const router = express.Router();

const { books } = require("../../data");
let id = books.length;

// Write routes here...

// GET all books
router.get("/", (req, res) => {
  res.json({ books });
});

// GET single book id
router.get("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  res.json({ book });
});

// POST or CREATE a new book
router.post("/", (req, res) => {
  id++;
  const book = { ...req.body, id: id };
  books.push(book);
  res.json({ book });
});

// DELETE book id 3
router.delete("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  books.splice(books.indexOf(book), 1);
  res.json({ book });
});

// PUT or UPDATE a book id
router.put("/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  book.author = req.body.author;
  res.json({ book });
});

module.exports = router;
