import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { CircularProgress, Divider, Grid, List, makeStyles, Typography } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';

import { cleanAllMessages, fetchMessages, sendMessage } from '../../store/actions/messages';
import Message from '../Message';
import MessageInput from '../MessageInput';

const DEBOUNCE_MESSAGE_TIME = 0.5 * 1000; // milliseconds
const DEBOUNCE_MESSAGE_MAX_TIME = 1 * 1000; // milliseconds

const useStyles = makeStyles({
	messagePanel: {
		height: '80vh',
		overflowY: 'auto',
	},
	emptyPanel: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90vh',
		padding: '20px',
	},
	messageIcon: {
		padding: '5px',
	},
});

const MesssagesPanel = ({
	cleanAllMessages,
	currentChat,
	currentUser,
	fetchMessages,
	messages,
	sendMessage,
}) => {
	const { allMessages, loading: isLoading } = messages;
	const { _id: chatId } = currentChat;
	const classes = useStyles();
	const messagesEndRef = useRef(null);
	const debouncedMessages = debounce(sendMessage, DEBOUNCE_MESSAGE_TIME, {
		maxWait: DEBOUNCE_MESSAGE_MAX_TIME,
	});

	useEffect(() => {
		// If a chat was selected
		if (chatId) {
			console.log(currentChat);
			fetchMessages(chatId);
		}

		// clean all the message store when removed
		return cleanAllMessages;
	}, [currentChat, cleanAllMessages, fetchMessages]);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [allMessages]);

	if (!chatId) {
		return (
			<>
				<Typography
					variant="subtitle1"
					color="primary"
					align="center"
					className={classes.emptyPanel}
				>
					Select a <MessageIcon color="secondary" className={classes.messageIcon} />
				</Typography>
			</>
		);
	}

	const renderMessages = () => {
		const usersMessages = allMessages.map((msg) => {
			const isOwnUserMessage = msg.sender._id === currentUser._id;
			const messageAlign = isOwnUserMessage ? 'right' : 'left';
			const messageSender = isOwnUserMessage ? currentUser.name : msg.sender.name;
			return (
				<div key={msg.uuid}>
					<Message text={msg.text} align={messageAlign} sender={messageSender} />
				</div>
			);
		});

		return (
			<div>
				{usersMessages}
				<div ref={messagesEndRef} />
			</div>
		);
	};

	const handleSendMessage = (message) => {
		const { _id, name } = currentUser;
		if (message.length > 0) {
			debouncedMessages({ chatId, msgText: message, sender: { _id, name } });
		}
	};

	const renderPanel = () =>
		isLoading ? (
			<Grid container direction="column" alignContent="center" className={classes.emptyPanel}>
				<CircularProgress color="secondary" />
			</Grid>
		) : (
			<>
				<List className={classes.messagePanel}>{renderMessages()}</List>

				<Divider />

				<MessageInput onSend={handleSendMessage} />
			</>
		);

	return renderPanel();
};

const mapStateToProps = (state) => ({
	currentChat: state.chats.currentChat,
	currentUser: state.users.currentUser,
	messages: state.messages,
});

export default connect(mapStateToProps, {
	cleanAllMessages,
	fetchMessages,
	sendMessage,
})(MesssagesPanel);
