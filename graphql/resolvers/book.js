const BookModel = require('../../models/Book')

module.exports = {
    Query : {
        getBooks: async () => {
            try {
              return await BookModel.find();
            } catch (error) {
              throw new Error(error.message);
            }
          },
          getBook: async (_, args) => {
            try {
              return await BookModel.findById(args.id);
            } catch (error) {
              throw new Error(error.message);
            }
          },
    },
    Mutation: {
      bookComment: async (BookModel, {body, username}) => {
        
      }
    }
}