const { ApolloServer } = require('apollo-server');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const start = require('./seed.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  cors: true,
});

start()
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then(({ url }) => console.log('server started at ' + url));
