const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `SELECT * FROM genres WHERE id=2;`;
  pool.query(query)
  .then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('error: get genres', err);
    res.sendStatus(500)
  })
  
});

module.exports = router;