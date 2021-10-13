const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = { expiresIn: '10h', algorithm: 'HS256' };

const generateToken = async ({ email }) => {
  const { dataValues: { password, ...user } } = await User.findOne({ where: { email } });
  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

module.exports = generateToken;