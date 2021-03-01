require('dotenv').config();

module.exports = {
	API_PREFIX: process.env.API_PREFIX,
	MONGO_DB_URI: process.env.MONGO_DB_URI,
	PORT: process.env.PORT,
};
