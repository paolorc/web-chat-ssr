const express = require('express');
const router = express.Router();

const { wrapAsyncHandler } = require('../../utils');
const { connectUser, fetchUsers } = require('../../controllers/user');
const { fetchUserChats } = require('../../controllers/chat');

router.get('/', wrapAsyncHandler(fetchUsers));
router.get('/:userId/chats', wrapAsyncHandler(fetchUserChats));
router.post('/:userId/connect', wrapAsyncHandler(connectUser));

module.exports = router;
