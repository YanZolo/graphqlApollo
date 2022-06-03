const AuthorModel = require("../../models/Author");

module.exports = {
  Query: {
    getAuthors: async () => {
      try {
        return AuthorModel.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    getAuthor: async (_, args) => {
      try {
        return await AuthorModel.findById(args.id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
