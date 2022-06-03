const { gql } = require("apollo-server");

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    createdAt: String!
    # authorId: ID!
    # author: Author
  }
  type Author {
    id: ID!
    name: String!
    createdAt: String!
    # books: [Book]
  }
  type Query {
    getBooks: [Book]
    getBook(id: ID!): Book
    getAuthors: [Author]
    getAuthor(id: ID!): Author
  }
`;
