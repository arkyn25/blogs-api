const express = require('express');
const rescue = require('express-rescue');
const { createCategory, getAllCategories } = require('../controllers/categoryControllers');
const { validateCategory } = require('../middlewares/categoryValidators');
const { validateToken } = require('../middlewares/tokenValidators');

const categoryRoute = express.Router();

categoryRoute.post('/', validateCategory, validateToken, rescue(createCategory));
categoryRoute.get('/', validateToken, rescue(getAllCategories));

module.exports = categoryRoute;