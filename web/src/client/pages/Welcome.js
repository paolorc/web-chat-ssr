import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress, Grid, List, makeStyles, Typography } from '@material-ui/core';

import { cleanAllUsers, fetchUsers, setActiveUser } from '../store/actions/users';
import UserInfo from '../components/UserInfo';

const useStyles = makeStyles({
	btn: {
		color: 'black',
		textDecoration: 'none',
	},
	title: { padding: '20px' },
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
});

const Welcome = ({ isLoading, allUsers, fetchUsers: loadUsers, cleanAllUsers, setActiveUser }) => {
	const classes = useStyles();

	useEffect(() => {
		//For re rendering without going to the server
		if (allUsers.length === 0) {
			loadUsers();
		}

		return cleanAllUsers;
	}, [cleanAllUsers, loadUsers]);

	const handleSelectUser = (user) => {
		setActiveUser(user);
	};

	const renderUsersList = () => {
		return (
			<>
				<Typography variant="subtitle1" color="primary" align="center">
					Available users to join
				</Typography>

				<List>
					{allUsers.length > 0 ? (
						availableUsers.map((user) => (
							<Link
								className={classes.btn}
								key={user._id}
								onClick={() => handleSelectUser(user)}
								to={`/chat-app/${user._id}`}
							>
								<UserInfo
									avatarUrl={user.imageUrl}
									userName={user.name}
									userLastName={user.lastName}
									withDivider
								/>
							</Link>
						))
					) : (
						<Typography variant="subtitle1" color="primary" align="center">
							No users available...
						</Typography>
					)}
				</List>
			</>
		);
	};

	return (
		<div className={classes.wrapper}>
			<Grid container direction="column" alignContent="center" alignItems="center">
				<Grid item xs={12}>
					<Typography
						variant="h3"
						align="center"
						color="secondary"
						className={classes.title}
					>
						Welcome
					</Typography>

					{isLoading && (
						<Grid container direction="column" alignContent="center">
							<CircularProgress color="secondary" />
						</Grid>
					)}
					{!isLoading && renderUsersList()}
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.users.allUsers,
	isLoading: state.users.loading,
});

const loadData = (store) => {
	// For the connect tag we need Provider component but on the server at this moment app is not rendered yet
	// So we need to use store itself to load data
	return store.dispatch(fetchUsers()); // Manually dispatch a network request
};

export default {
	component: connect(mapStateToProps, { cleanAllUsers, fetchUsers, setActiveUser })(Welcome),
	loadData,
};
