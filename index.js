const { ApolloServer, gql } = require('apollo-server');
const { authors, books } = require('./data.js');

const typeDefs = gql`
  type BookType {
    id: ID!
    name: String!
    authorId: Int!
    # author: AuthorType
  }
  type AuthorType {
    id: ID!
    name: String!
    # books: BookType
  }
  type Query {
    books: [BookType]
    book(id: ID!): BookType
    authors: [AuthorType]
    author(id: ID!): AuthorType
  }
`;

const resolvers = {
  Query: {
    books: () => {
      return  books ;
    },
    book: (_,args) => {
      return books.find((book) => +book.id === +args.id)
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

server
  .listen({ port: 5000 })
  .then(({ url }) => console.log('server started at ' + url));
