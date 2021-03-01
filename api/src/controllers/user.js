const User = require('../models/User');

const connectUser = async (req, res) => {
	const { userId } = req.params;
	const { connection } = req.body;
	const users = await User.updateOne({ _id: userId }, { connection });

	return res.status(200).json(users);
};

const fetchUsers = async (_req, res) => {
	const users = await User.find({});

	return res.status(200).json(users);
};

module.exports = {
	connectUser,
	fetchUsers,
};
