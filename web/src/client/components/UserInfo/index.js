import React from 'react';
import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const UserInfo = ({
	avatarUrl = 'https://material-ui.com/static/images/avatar/1.jpg',
	id = Math.random(),
	isButton = false,
	isOwner = false,
	onClick = () => {},
	userName = 'Name',
	userLastName = 'LastName',
	withDivider = false,
}) => {
	return (
		<ListItem
			button={isButton}
			divider={withDivider}
			key={id}
			onClick={(event) => onClick(event, 0)}
		>
			<ListItemIcon>
				<Avatar src={avatarUrl} />
			</ListItemIcon>
			<ListItemText primary={`${userName} ${userLastName}`}></ListItemText>
			{isOwner && <ListItemText secondary="You" align="right" />}
		</ListItem>
	);
};

export default UserInfo;
