import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { CircularProgress, Divider, Grid, List, makeStyles, Typography } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';

import { cleanAllMessages, fetchMessages } from '../../store/actions/messages';
import Message from '../Message';
import MessageInput from '../MessageInput';

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
}) => {
	const classes = useStyles();
	const { allMessages, loading: isLoading } = messages;

	useEffect(() => {
		// If a chat was selected
		if (currentChat._id) {
			console.log(currentChat);
			fetchMessages();
		}

		// clean all the message store when removed
		return cleanAllMessages;
	}, [currentChat, cleanAllMessages, fetchMessages]);

	if (!currentChat._id) {
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
				<div key={msg._id}>
					<Message text={msg.text} align={messageAlign} sender={messageSender} />
				</div>
			);
		});

		return usersMessages;
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

				<MessageInput />
			</>
		);

	return renderPanel();
};

const mapStateToProps = (state) => ({
	currentChat: state.chats.currentChat,
	currentUser: state.users.currentUser,
	messages: state.messages,
});

export default connect(mapStateToProps, { cleanAllMessages, fetchMessages })(MesssagesPanel);
