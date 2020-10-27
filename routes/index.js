var express = require('express');
var router = express.Router();
const client = require('../database/client')
const COLLECTION = 'movies'


/* GET users listing. */
router.get('/', async function(req, res, next) {
  await client.connect()
  const db = client.db(process.env.MONGODB_DB_NAME)

  const results = await db.collection(COLLECTION).find({}).toArray()
  
  res.json(results)
});

router.post('/new', async function(req, res, next) {
  await client.connect()
  const db = client.db(process.env.MONGODB_DB_NAME)
  console.log(req.body)
  const addedMovie = await db.collection(COLLECTION).insertOne({

    Title: req.body.title,
    Director: req.body.director,
    Year: req.body.year
  })

  if (addedMovie.insertedCount === 1) {
    res.send('successfully added movie')
    return
  }
  res.send('unable to add movie')
});

router.put('', function(req, res, next) {

});

router.delete('',function(req, res, next) {

})

module.exports = router;
