const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {

  Movie.find().then(allTheMovies=>{
    console.log(allTheMovies)
    res.render('index', { allTheMovies:allTheMovies, test:'test' });

  }).catch(err=>console.log(err))
});


router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id}).then(ourOneMovie => {
    console.log(ourOneMovie)
    Celebrity.find({movies:{$in: ourOneMovie._id  } }).then(response=>{
      console.log('response ',response)
      res.json({ourOneMovie})
    })
  })
})


module.exports = router;
