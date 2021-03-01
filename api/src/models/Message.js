const { model, Schema, Types } = require('mongoose');

const MessageSchema = new Schema(
	{
		chatId: {
			index: true,
			type: Types.ObjectId,
			ref: 'Chat',
			required: true,
		},
		createdAt: { index: true, type: Date },
		sender: { _id: Types.ObjectId, name: String },
		text: String,
		uuid: { type: String, unique: true },
	},
	{ versionKey: false },
);

module.exports = model('Message', MessageSchema);
