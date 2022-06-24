const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books',
  },
  createdAt: String,
});

module.exports = mongoose.model('authors', authorSchema);
