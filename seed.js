const mongoose = require("mongoose");
const { DB_URL } = require("./config.js");
const BookModel = require("./models/Book");
const AuthorModel = require("./models/Author");
const { authors, books } = require("./data.js");

const start = async () => {
  return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(async () => {
    if ((await AuthorModel.countDocuments()) < 1) {
      authors.map(async (author) => {
          author.createdAt =  new Date()
        await AuthorModel.create(author);
      });
    }
    if ((await BookModel.countDocuments()) < 1) {
      books.map(async (book) => {
          book.createdAt = new Date()
        await BookModel.create(book);
      });
    }
    console.log("database connected");
  });
};
module.exports = start;
