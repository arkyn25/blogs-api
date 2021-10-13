const { User } = require('../models');

const createUser = async (userFields) => {
  const { displayName, email, password, image } = userFields;
  const user = await User.create({ displayName, email, password, image });
  return user;
};

module.exports = {
  createUser,
};