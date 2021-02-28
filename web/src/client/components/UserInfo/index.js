import React from 'react';
import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const UserInfo = ({
	avatarUrl = 'https://material-ui.com/static/images/avatar/1.jpg',
	key = Math.random(),
	userName = 'Name',
	userLastName = 'LastName',
	withDivider = false,
}) => {
	return (
		<ListItem divider={withDivider} key={key}>
			<ListItemIcon>
				<Avatar src={avatarUrl} />
			</ListItemIcon>
			<ListItemText primary={`${userName} ${userLastName}`}></ListItemText>
			<ListItemText secondary="You" align="right" />
		</ListItem>
	);
};

export default UserInfo;
