const bcrypt = require("bcrypt");
const UserModel = require("../../models/User");

const verifyPassword = async (password, email) => {
  const user = await UserModel.find({ email });
  if (!user) {
    throw new Error("This email is not registred");
  }
  try {
    return await bcrypt.compare(password, user.password);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = verifyPassword;
