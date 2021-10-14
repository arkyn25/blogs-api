const { BlogPost, PostsCategory, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }, userId) => {
  const post = await BlogPost.create({ userId, title, content });
  categoryIds.forEach(async (categoryId) =>
  PostsCategory.create({ postId: post.id, categoryId }));
  return post;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
      where: { id },
      include: [
          { attributes: ['id', 'displayName', 'email', 'image'], model: User, as: 'user' },
          { model: Category, as: 'categories' },
      ],
  });
  return post;
};

module.exports = {
  createPost,
  getPostById,
};