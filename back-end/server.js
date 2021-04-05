
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/checkout-movie', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for movies: a title and a path to an image.
const movieSchema = new mongoose.Schema({
  title: String,
  path: String,
  mpa: String,
  genre: String,
  imdb: Number,
  summary: String,
});

// Create a model for items in the museum.
const Movie = mongoose.model('Movie', movieSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  console.log("calling photos");
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new movie: takes a title and a path to an image.
app.post('/api/movies', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    path: req.body.path,
    mpa: req.body.mpa,
    genre: req.body.genre,
    imdb: req.body.imdb,
    summary: req.body.summary,
  });
  try {
    await movie.save();
    res.send(movie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
