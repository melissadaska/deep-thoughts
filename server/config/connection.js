const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://merrychristmas:merrychristmas@deepthoughts.5umz5.mongodb.net/deepthoughts?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/deep-thoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
