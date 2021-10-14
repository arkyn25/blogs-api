const { Category } = require('../models');

const createCategory = async (categoryFields) => {
  const { name } = categoryFields;
  const category = await Category.create({ name });
  return category;
};

module.exports = {
  createCategory,
};