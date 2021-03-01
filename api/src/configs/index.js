require('dotenv').config();

module.exports = {
	API_PREFIX: process.env.API_PREFIX || '/api',
	MONGO_DB_URI:
		process.env.MONGO_DB_URI ||
		'mongodb+srv://iov-user:root@cluster0.lhauy.mongodb.net/chat-app',
	PORT: process.env.PORT || '3000',
};
