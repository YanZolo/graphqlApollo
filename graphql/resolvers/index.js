const bookResolvers = require('./book');
const authorResolvers = require('./author');
const userResolvers = require('./user');
const postResolvers = require('./post');

module.exports = {
  Query: {
    ...bookResolvers.Query,
    ...authorResolvers.Query,
    ...postResolvers.Query,
  },
  Mutation: { ...userResolvers.Mutation, ...postResolvers.Mutation },
};
