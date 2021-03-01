const { model, Schema, Types } = require('mongoose');

const ChatSchema = new Schema(
	{
		lastMessage: String,
		members: [
			{
				index: true,
				type: Types.ObjectId,
				ref: 'User',
				required: true,
			},
		],
	},
	{ timestamps: true },
);

module.exports = model('Chat', ChatSchema);
