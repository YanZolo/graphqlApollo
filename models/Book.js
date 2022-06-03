const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: String,
    authorId: Number,
    createdAt: String
})

module.exports = mongoose.model('books', bookSchema)