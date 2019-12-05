const mongoose = require('mongoose');
const {Schema} = mongoose;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  movies: [{type:mongoose.Schema.Types.ObjectId}]
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;