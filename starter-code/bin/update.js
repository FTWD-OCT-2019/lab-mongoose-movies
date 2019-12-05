
const mongoose     = require('mongoose');
const celebrity    = require('../models/celebrity');
const movie    = require('../models/movie');

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
//celebrity.create(celebrities).then(res =>{
  //mongoose.connection.close();
//})

let mov =  movie.find().then(shawShank => {
  shawShank = shawShank[Math.floor(Math.random()*shawShank.length)]
  celebrity.update({}, {$push: {movies: shawShank}}).then(res=>console.log(res))

})



