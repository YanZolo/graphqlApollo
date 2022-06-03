const bookResolvers = require("./book");
const authorResolvers = require("./author");
const userResolvers = require('./user')

module.exports = {
  Query: { ...bookResolvers.Query, ...authorResolvers.Query },
  Mutation: {...userResolvers.Mutation}
};
