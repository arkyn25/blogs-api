const postService = require('../services/postServices');

const createPost = async (req, res) => {
  const post = await postService.createPost(req.body, req.user.id);
  res.status(201).json(post);
};

module.exports = {
  createPost,
};