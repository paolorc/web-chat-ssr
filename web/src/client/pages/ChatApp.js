import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import ChatsPanel from '../components/ChatsPanel';
import MesssagesPanel from '../components/MessagesPanel';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	appSection: {
		width: '80%',
	},
	chatListDividers: {
		borderRight: '1px solid #e0e0e0',
		borderBottom: '1px solid #e0e0e0',
	},
}));

const TestChat = () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Grid container component={Paper} className={classes.appSection}>
				<Grid item xs={12} sm={12} md={3} className={classes.chatListDividers}>
					<ChatsPanel />
				</Grid>
				<Grid item xs={12} sm={12} md={9}>
					<MesssagesPanel />
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.users?.allUsers,
});

export default {
	component: connect(mapStateToProps, {})(TestChat),
};
