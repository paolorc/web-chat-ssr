const { Types } = require('mongoose');
const Message = require('../models/Message');

const createMessage = async (req, res) => {
	const { message } = req.body;
	const messages = await Message.create(message);

	return res.status(200).json(messages);
};

const fetchChatMessages = async (req, res) => {
	const { chatId } = req.params;
	const messages = await Message.find({ chatId: Types.ObjectId(chatId) }).sort({ createdAt: -1 });

	return res.status(200).json(messages);
};

module.exports = {
	createMessage,
	fetchChatMessages,
};
