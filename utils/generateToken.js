const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config.js');

module.exports.generateToken = async (user) => {
  try {
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    return token;
  } catch (error) {
    throw new Error(error);
  }
};
