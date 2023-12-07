const express = require("express");
const router = express.Router();

const itemsRouter = require('./item/items');
const usersRouter = require('./user/users');

// different model routers
router.use('/items', itemsRouter);
router.use('/users', usersRouter);

module.exports = router;
