const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    # comments: [Post]
    # likes: [Likes]
    createdAt: String!
    author: String!
  }
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
    user: ID!
  }
  type Likes {
    username: String!
    createdAt: String!
  }
  type Author {
    id: ID!
    name: String!
    createdAt: String!
    # books: [Book]
  }
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getBooks: [Book]
    getBook(id: ID!): Book
    getAuthors: [Author]
    getAuthor(id: ID!): Author
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    createPost(body: String!): Post!
  }
`;
