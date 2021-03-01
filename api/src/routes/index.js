const express = require('express');
const router = express.Router();

const chats = require('./chats');
const messages = require('./messages');
const users = require('./users');

router.use('/chats', chats);
router.use('/messages', messages);
router.use('/users', users);

module.exports = router;
