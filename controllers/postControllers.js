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

  const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    if (post) {
        return res.status(200).send(post);
    }
    return res.status(404).json({ message: 'Post does not exist' });
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};