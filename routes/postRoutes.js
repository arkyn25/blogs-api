const express = require('express');
const rescue = require('express-rescue');
const { createPost, getAllPosts, getPostById } = require('../controllers/postControllers');
const { validatePost } = require('../middlewares/postValidators');
const { validateToken } = require('../middlewares/tokenValidators');

const postRoute = express.Router();

postRoute.post('/', validatePost, validateToken, rescue(createPost));
postRoute.get('/', validateToken, rescue(getAllPosts));
postRoute.get('/:id', validateToken, rescue(getPostById));

module.exports = postRoute;