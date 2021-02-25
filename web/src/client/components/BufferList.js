import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 0,
		width: '100%',
		maxWidth: '36ch',
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
}));

const BufferList = () => {
	const classes = useStyles();

	return (
		<List dense className={classes.root}>
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

			<Divider variant="inset" component="li" />

			<ListItem button>
				<ListItemAvatar>
					<Avatar>PR</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary="Paolo Reyes"
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

			<Divider variant="inset" component="li" />
		</List>
	);
};

export default BufferList;
