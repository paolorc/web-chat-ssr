import React from 'react';
import { Grid, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	messageContainerLeft: {
		backgroundColor: 'secondary',
		color: 'text.secondary',
		justifyContent: 'start',
	},
	messageContainerRight: {
		backgroundColor: 'primary',
		color: 'text.secondary',
		justifyContent: 'end',
	},
	messageLeft: {
		backgroundColor: theme.palette.secondary.main,
		...theme.palette.message,
	},
	messageRight: {
		backgroundColor: theme.palette.primary.main,
		...theme.palette.message,
	},
}));

const Message = ({ key = Math.random(), text = '', align = 'left', sender = 'Username' }) => {
	const classes = useStyles();
	const alignSettings = {
		left: { container: classes.messageContainerLeft, message: classes.messageLeft },
		right: { container: classes.messageContainerRight, message: classes.messageRight },
	};

	return (
		<ListItem key={key} className={alignSettings[align].container}>
			<Grid container className={alignSettings[align].message}>
				<Grid item xs={12}>
					<ListItemText align={align} secondary={sender} />
					<ListItemText align={align} primary={text} />
				</Grid>
			</Grid>
		</ListItem>
	);
};

export default Message;
