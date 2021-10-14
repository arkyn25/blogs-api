const postService = require('../services/postServices');
const { BlogPost, User, Category } = require('../models');

const createPost = async (req, res) => {
  const post = await postService.createPost(req.body, req.user.id);
  res.status(201).json(post);
};
const getAllPosts = (_req, res) => BlogPost.findAll({
  include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] }).then((data) => res.status(200).json(data));
module.exports = {
  createPost,
  getAllPosts,
};