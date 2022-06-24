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
      try {
        const newPost = new PostModel({
          body,
          user: user.id,
          username: user.username,
          createdAt: new Date().toISOString(),
        });
        return await newPost.save();
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePost: async (_, { postId, body }, context) => {
      try {
        const user = checkAuth(context);
        console.log('user updatePost:>> ', user);

        const post = await PostModel.findOne({ postId });
        console.log('post :>> ', post);
        post.body = body;
        return await post.save();
      } catch (error) {
        throw new Error(error);
      }
    },
    deletePost: async (_, { postId }, context) => {
      try {
        const user = checkAuth(context);
        console.log('user deletePost:>> ', user);

        await PostModel.deleteOne({ _id: postId });
        return 'SuccessFully deleted';
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
