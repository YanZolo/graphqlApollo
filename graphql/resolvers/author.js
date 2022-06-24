const AuthorModel = require("../../models/Author");

module.exports = {
  Query: {
    getAuthors: async () => {
      try {
        return AuthorModel.find();
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getAuthor: async (_, args) => {
      try {
        return await AuthorModel.findById(args.authorId);
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};
