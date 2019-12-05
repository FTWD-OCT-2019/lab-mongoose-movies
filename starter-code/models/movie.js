const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
  title: String,
  
});

const Movie = mongoose.model('Movie', schema);
module.exports = Movie;


// "_id" : ObjectId("5de98401dfae728cca1f7bf0"),
// "title" : "The Shawshank Redemption",
// "year" : "1994",
// "director" : "Frank Darabont",
// "duration" : "2h 22min",
// "genre" : [
//   "Crime",
//   "Drama"
// ],
// "rate" : "9.3"