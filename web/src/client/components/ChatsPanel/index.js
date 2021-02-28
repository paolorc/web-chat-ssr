import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress, Grid, Hidden, List } from '@material-ui/core';

import { cleanAllChats, fetchChats, setCurrentChat } from '../../store/actions/chats';
import Chat from '../Chat';
import UserInfo from '../UserInfo';

const ChatsPanel = ({ chats, cleanAllChats, fetchChats, setCurrentChat, users }) => {
	const { allChats, currentChat, loading: isLoading } = chats;
	const { currentUser } = users;

	useEffect(() => {
		fetchChats();

		return cleanAllChats;
	}, [fetchChats]);

	const handleSelectChat = (chat) => {
		setCurrentChat(chat);
	};

	const renderChats = (isCompact = false) => {
		const userChats = allChats.map((chat) => {
			const chatInfo = {
				...chat,
				memberUser: chat.members.find((member) => member._id !== currentUser._id),
			};

			return (
				<div key={chatInfo._id}>
					<Chat
						avatarUrl={chatInfo.memberUser.imageUrl}
						isCompact={isCompact}
						id={chatInfo._id}
						isSelected={currentChat._id === chatInfo._id}
						lastMessage={chatInfo.lastMessage}
						onClick={() => handleSelectChat(chatInfo)}
						userName={chatInfo.memberUser.name}
						userLastName={chatInfo.memberUser.lastName}
					/>
				</div>
			);
		});

		return isLoading ? (
			<Grid container direction="column" alignContent="center">
				<CircularProgress color="secondary" />
			</Grid>
		) : (
			userChats
		);
	};

	return (
		<>
			<Hidden mdUp>
				<List
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						padding: 0,
					}}
				>
					{renderChats(true)}
				</List>
			</Hidden>

			<Hidden smDown>
				<List>
					<UserInfo
						avatarUrl={currentUser.imageUrl}
						isOwner
						userName={currentUser.name}
						userLastName={currentUser.lastName}
						withDivider
					/>

					{renderChats()}
				</List>
			</Hidden>
		</>
	);
};

const mapStateToProps = (state) => ({
	chats: state.chats,
	users: state.users,
});

export default connect(mapStateToProps, { cleanAllChats, fetchChats, setCurrentChat })(ChatsPanel);
