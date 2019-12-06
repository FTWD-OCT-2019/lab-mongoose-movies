const celebrities = [
  {
    name: 'Johnny Nguyen',
    occupation: 'USA',
    catchPhrase: "if you have a rich mindset you're going to be rich!"
  },
  {
    name: 'Bred Pitt',
    occupation: 'Baker',
    catchPhrase: "I love kids"
  },
  {
    name: 'Vitaly Italy',
    occupation: 'Spy',
    catchPhrase: "You're a bad girl"
  }
];

const mongoose     = require('mongoose');
const celebrity    = require('../models/celebrity');
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
celebrity.create(celebrities).then(res =>{
  mongoose.connection.close();
})