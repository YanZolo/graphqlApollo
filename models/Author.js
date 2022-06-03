const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: String,
    createdAt: String
})

module.exports = mongoose.model('authors', authorSchema)