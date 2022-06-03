const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: String,
    authorId:{
       type: mongoose.Schema.Types.ObjectId,
        ref: "authors"
    },
    createdAt: String
})

module.exports = mongoose.model('books', bookSchema)