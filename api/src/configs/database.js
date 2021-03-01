const mongoose = require('mongoose');
const { MONGO_DB_URI } = require('./index');

const loader = () => {
	const connection = mongoose.connect(MONGO_DB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		poolSize: 10,
		bufferMaxEntries: 0,
		connectTimeoutMS: 10000,
		socketTimeoutMS: 45000,
	});
	mongoose.set('debug', false);

	return connection;
};

module.exports = {
	loader,
};
