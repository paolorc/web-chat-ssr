import React from 'react';
import {
	Avatar,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';

const Chat = ({
	avatarUrl = 'https://material-ui.com/static/images/avatar/1.jpg',
	id = Math.random(),
	isCompact = false,
	isSelected = false,
	lastMessage = '',
	onClick = () => {
		console.log('Holaaa');
	},
	userName = 'Name',
	userLastName = 'LastName',
	withDivider = true,
}) => {
	return (
		<>
			<ListItem
				button
				key={id}
				selected={isSelected}
				onClick={(event) => onClick(event, 0)}
				alignItems="flex-start"
			>
				<ListItemIcon>
					<Avatar src={avatarUrl} />
				</ListItemIcon>
				<ListItemText
					primary={`${userName} ${userLastName}`}
					secondary={
						!isCompact && (
							<Typography variant="body2" color="primary" noWrap>
								{lastMessage}
							</Typography>
						)
					}
				/>
			</ListItem>

			{withDivider && !isCompact && <Divider variant="inset" component="li" />}
		</>
	);
};

export default Chat;
