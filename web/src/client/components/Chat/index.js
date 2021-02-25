import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	inline: {
		display: 'inline',
	},
}));

export default function SlidebarChat({ name, lastName, message = '' }) {
	const classes = useStyles();

	return (
		<ListItem button alignItems="flex-start">
			<ListItemAvatar>
				<Avatar>JW</Avatar>
			</ListItemAvatar>

			<ListItemText
				primary="Jefferson Etc"
				secondary={
					<Typography
						component="span"
						variant="body2"
						color="primary"
						noWrap
						className={classes.inline}
					>
						This is a very long text in my opinion
					</Typography>
				}
			/>
		</ListItem>
	);
}
