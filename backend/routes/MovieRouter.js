const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

// Add to watchlist
router.post("/", async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
