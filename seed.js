const mongoose = require("mongoose");
const { DB_URL } = require("./config");
const BookModel = require("./models/Book");
const AuthorModel = require("./models/Author");
const UserModel = require("./models/User")
const { authors, books, users } = require("./data");
const hash = require("./utils/bcrypt/hashPassword")

const start = async () => {
  return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(async () => {
    if ((await AuthorModel.countDocuments()) < 1) {
      authors.map(async (author) => {
          author.createdAt =  new Date().toISOString()
        await AuthorModel.create(author);
      });
    }
    if ((await BookModel.countDocuments()) < 1) {
      books.map(async (book) => {
          book.createdAt = new Date().toISOString()
        await BookModel.create(book);
      });
    }
    if ((await UserModel.countDocuments()) < 1) {
      users.map(async (user) => {
          user.createdAt = new Date().toISOString()
          user.password = await hash(user.username)
        await UserModel.create(user);
      });
    }
    console.log("database connected");
  });
};
module.exports = start;
