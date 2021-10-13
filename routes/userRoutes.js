const express = require('express');
const rescue = require('express-rescue');
const { createUser, getAllUsers } = require('../controllers/userControllers');
const { validateUser } = require('../middlewares/userValidators');
const { validateToken } = require('../middlewares/tokenValidators');

const userRoute = express.Router();

userRoute.post('/', validateUser, rescue(createUser));
userRoute.get('/', validateToken, rescue(getAllUsers));

module.exports = userRoute;