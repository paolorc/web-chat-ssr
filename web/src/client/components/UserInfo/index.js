import React from 'react';
import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const UserInfo = ({
	avatarUrl = 'https://material-ui.com/static/images/avatar/1.jpg',
	isButton = false,
	isOwner = false,
	key = Math.random(),
	userName = 'Name',
	userLastName = 'LastName',
	withDivider = false,
}) => {
	return (
		<ListItem button={isButton} divider={withDivider} key={key}>
			<ListItemIcon>
				<Avatar src={avatarUrl} />
			</ListItemIcon>
			<ListItemText primary={`${userName} ${userLastName}`}></ListItemText>
			{isOwner && <ListItemText secondary="You" align="right" />}
		</ListItem>
	);
};

export default UserInfo;
