const express = require('express');
const rescue = require('express-rescue');
const { createPost } = require('../controllers/postControllers');
const { validatePost } = require('../middlewares/postValidators');
const { validateToken } = require('../middlewares/tokenValidators');

const postRoute = express.Router();

postRoute.post('/', validatePost, validateToken, rescue(createPost));

module.exports = postRoute;