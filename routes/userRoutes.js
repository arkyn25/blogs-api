const express = require('express');
const { createUser } = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/userValidators');

const userRoute = express.Router();

userRoute.post('/', validateUser, createUser);

module.exports = userRoute;