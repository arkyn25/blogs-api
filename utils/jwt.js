const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'SenhaSuperSecreta';
const jwtConfig = { expiresIne: '1240m', algorithm: 'HS256' };

const generateToken = async ({ email }) => {
  const { dataValues: { password, ...user } } = await User.findOne({ where: { email } });
  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

module.exports = generateToken;