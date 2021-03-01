const express = require('express');
const router = express.Router();

const { fetchChats } = require('../../controllers/chat');
const { fetchChatMessages } = require('../../controllers/message');

router.get('/', fetchChats);
router.get('/:chatId/messages', fetchChatMessages);

module.exports = router;
