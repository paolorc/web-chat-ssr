const Chat = require('../models/Chat');

const fetchChats = async (req, res) => {
	const chats = await Chat.find({}).populate('members');

	return res.status(200).json(chats);
};

const fetchUserChats = async (req, res) => {
	const { userId } = req.params;
	const chats = await Chat.find({ members: { $in: [userId] } }).populate('members');

	return res.status(200).json(chats);
};

module.exports = {
	fetchChats,
	fetchUserChats,
};
