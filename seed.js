const mongoose = require('mongoose');
const { DB_URL } = require('./config');
const BookModel = require('./models/Book');
const AuthorModel = require('./models/Author');
const UserModel = require('./models/User');
const PostModel = require('./models/Post');
const { authors, books, users, posts } = require('./data');
const hash = require('./utils/bcrypt/hashPassword');

const start = async () => {
  return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(async () => {
    if ((await BookModel.countDocuments()) < 1) {
      books.map(async (book) => {
        book.createdAt = new Date().toISOString();
        book.author = book.author.trim();
        await BookModel.create(book);
      });
    }
    if ((await AuthorModel.countDocuments()) < 1) {
      authors.map(async (author) => {
        author.createdAt = new Date().toISOString();
        const authorBooks = await BookModel.find({
          author: author.name.trim(),
        });
        author.books = authorBooks.reduce((a, c) => {
          return [...a, c._id];
        }, []);
        await AuthorModel.create(author);
      });
    }

    if ((await UserModel.countDocuments()) < 1) {
      users.map(async (user) => {
        user.createdAt = new Date().toISOString();
        user.password = await hash('1234');
        await UserModel.create(user);
      });
    }
    if ((await PostModel.countDocuments()) < 1) {
      posts.map(async (post) => {
        const user = await UserModel.findOne({ _id: post.user });
        post.createdAt = new Date().toISOString();
        post.username = user.username;
        await PostModel.create(post);
      });
    }
    console.log('database connected');
  });
};
module.exports = start;
