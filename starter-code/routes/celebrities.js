const express = require('express');
const router  = express.Router();
const celebrity = require('../models/celebrity');
const movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  celebrity.find().then(celebrities => {
    console.log(celebrities)
    res.render('celebrities/index', {celebrities});
  }).catch(err => {
    next(err);
  })
});
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id/edit', (req, res, next) => {
  celebrity.findById(req.params.id).then(celebrity => {
    res.render('celebrities/edit', {celebrity});
  })
});

router.post('/:id', (req, res, next) => {
  celebrity.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }, {new: true}).then(response => {
    console.log(response);
    res.redirect('/celebrities');
  });
})


router.get('/:id', (req, res, next) => {
  celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity)

    movie.find({_id: {$in: celebrity.movies}}).then(movies => {
      console.log('movies are ',movies)
      res.render('celebrities/show', {celebrity, movies});

    })
  }).catch(err => {
    next(err);
  })
});

router.post('/', (req, res, next) => {
  celebrity.create(req.body).then(response => {
    console.log(response);
    res.redirect('/celebrities');
    // throw new Error('BROKEN');
  }).catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
  celebrity.findByIdAndDelete(req.params.id).then(response => {
    console.log(response);
    res.redirect('/celebrities');
  })
})


module.exports = router;
