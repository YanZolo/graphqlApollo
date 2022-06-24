const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const UserModel = require('../../models/User');
const hash = require('../../utils/bcrypt/hashPassword');
const { SECRET_KEY } = require('../../config');
const {
  validateRegisterInput,
  validateLoginInput,
} = require('../../utils/validators');
const verifyPassword = require('../../utils/bcrypt/verifyPassword');
const { generateToken } = require('../../utils/generateToken');

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
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError('Error', { errors });
      }
      const user = await UserModel.findOne({ email });
      if (user) {
        throw new UserInputError('This email is taken !');
      }

      try {
        password = await hash(password);
        const newUser = new UserModel({
          username: username.trim(),
          email: email.trim(),
          password,
          createdAt: new Date().toISOString(),
        });
        const result = await newUser.save();
        if (result) {
          const token = generateToken(result);
          return {
            ...result._doc,
            id: result._id,
            token,
          };
        }
      } catch (error) {
        throw new Error(error.message);
      }
    },
    login: async (_, { email, password }) => {
      const { valid, errors } = validateLoginInput(email, password);

      if (!valid) {
        throw new UserInputError('Error', { errors });
      }

      const user = await UserModel.findOne({ email });
      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await verifyPassword(password, user.password);
      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }
      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};

