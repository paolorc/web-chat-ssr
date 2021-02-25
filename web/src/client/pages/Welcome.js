import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Room from '@material-ui/icons/Room';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	user: {
		border: 0,
		color: 'blue',
	},
});

const Welcome = ({ staticContext = {}, isLoading }) => {
	const classes = useStyles();

	return (
		<div>
			<Box textAlign="center">
				<h1>Welcome Page</h1>
				{!isLoading && <p>Here goes the users list to select</p>}
				<Button color="secondary" startIcon={<Room />}>
					Login
				</Button>
				<Typography variant="h1" color="primary">
					Hello
				</Typography>
			</Box>
		</div>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.users.allUsers,
	isLoading: state.users.loading,
});

export default {
	component: connect(mapStateToProps, {})(Welcome),
};
