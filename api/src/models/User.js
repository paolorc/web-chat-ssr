const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
	connection: String,
	name: String,
	lastName: String,
	imageUrl: String,
});

module.exports = model('User', UserSchema);
