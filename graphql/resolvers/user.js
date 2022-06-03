const jwt = require("jsonwebtoken");
const UserModel = require("../../models/User");
const hash = require("../../utils/bcrypt/hashPassword");
const { SECRET_KEY } = require("../../config");

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        return await UserModel.find();
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getUser: async (_, args) => {
      try {
        return await UserModel.findById(args.id);
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    register: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      password = await hash(password);
      const newUser = new UserModel({
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      });
      const result = await newUser.save();
      const token = jwt.sign(
        {
          id: result.id,
          username: result.username,
          email: result.email,
        },
        SECRET_KEY
      );

      return {
        ...result._doc,
        id: result._id,
        token,
      };
    },
  },
};
