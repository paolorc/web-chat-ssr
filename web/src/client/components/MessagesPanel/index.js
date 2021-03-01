import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Divider, List, makeStyles, Typography } from '@material-ui/core';
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
		height: '80vh',
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
	const { allMessages, loading } = messages;

	useEffect(() => {
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

	return (
		<>
			<List className={classes.messagePanel}>
				<Message
					text="Te amo mucho mi amor... gracias por estos dias... de entenderme y aguantarme y ayudarme uu"
					align="left"
					sender="Paolo Reyes Gordito"
				/>

				<Message
					text="Gracias por todos los desayunos ricooos =)"
					align="right"
					sender="Gabriela Villafuerte, Mi vida"
				/>
			</List>

			<Divider />

			<MessageInput />
		</>
	);
};

const mapStateToProps = (state) => ({
	currentChat: state.chats.currentChat,
	currentUser: state.users.currentUser,
	messages: state.messages,
});

export default connect(mapStateToProps, { cleanAllMessages, fetchMessages })(MesssagesPanel);
