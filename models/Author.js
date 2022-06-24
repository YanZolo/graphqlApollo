const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'books',
      required: true,
    },
  ],
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  createdAt: String,
});

module.exports = mongoose.model('authors', authorSchema);
