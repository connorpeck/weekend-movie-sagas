const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log(req.query);
  const query = ` SELECT (genres.name) FROM genres JOIN movies_genres ON genres.id = movies_genres.genre_id WHERE movie_id = $1;`;
  const values = [req.params.id];
  pool.query(query, values)
  .then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('error: get genres', err);
    res.sendStatus(500)
  })
  
});

module.exports = router;

// getting just the genre name

// SELECT (genres.name) FROM genres JOIN movies_genres ON genres.id = movies_genres.genre_id WHERE movie_id = 1;