const PostModel = require('../../models/Post');
const checkAuth = require('../../utils/checkAuth');

module.exports = {
  Query: {
    getPosts: async () => {
      try {
        return await PostModel.find();
      } catch (error) {
        return error.message;
      }
    },
    getPost: async (_, { postId }) => {
      try {
        const post = await PostModel.findById(postId);
        if (post) {
          return post;
        }
        throw new Error('Post not found !');
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createPost: async (_, { body }, context) => {
      const user = checkAuth(context);
      const newPost = new PostModel({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
     return await newPost.save()

    },
  },
};
