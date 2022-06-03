const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const { DB_URL } = require('./config.js');
const { authors, books } = require('./data.js');
const Book = require('./models/Book.js');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    createdAt: String!
    authorId: ID
    # author: AuthorType
  }
  type AuthorType {
    id: ID!
    name: String!
    # books: [Book]
  }
  type Query {
    getBooks: [Book]
    book(id: ID!): Book
    authors: [AuthorType]
    author(id: ID!): AuthorType
  }
`;

const resolvers = {
  Query: {
    getBooks: async () => {
      try {
        return await Book.find();
      } catch (error) {
        throw new Error(err);
      }
    },
    book: async (_, args) => {
      try {
        return await Book.findById(args.id);
      } catch (error) {
        throw new Error(err);
      }
    },
    authors: () => {
      return authors;
    },
    author: (_, args) => {
      return authors.find((author) => +author.id === +args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('database connected');
    return server.listen({ port: 5000 });
  })
  .then(({ url }) => console.log('server started at ' + url));
