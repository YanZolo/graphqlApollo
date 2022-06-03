const bookResolvers = require("./book");
const authorResolvers = require("./author");

module.exports = {
  Query: { ...bookResolvers.Query, ...authorResolvers.Query },
};
