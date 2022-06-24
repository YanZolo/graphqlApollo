const bcrypt = require("bcrypt");

const verifyPassword = async (password, userPassword) => {
  try {
    return await bcrypt.compare(password, userPassword);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = verifyPassword;
