import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, List, makeStyles, Typography } from '@material-ui/core';

import { fetchUsers, setActiveUser } from '../store/actions/users';
import UserInfo from '../components/UserInfo';

const useStyles = makeStyles({
	btn: {
		color: 'primary',
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

const Welcome = ({
	staticContext = {},
	fetchUsers: loadUsers,
	isLoading,
	allUsers,
	setActiveUser,
}) => {
	const classes = useStyles();

	useEffect(() => {
		console.log(JSON.stringify(allUsers));
		(async () => {
			await loadUsers();
		})();
	}, [loadUsers]);

	const handleSelectUser = (user) => {
		console.log(JSON.stringify(user));
		setActiveUser(user);
	};

	return (
		<div className={classes.wrapper}>
			<Grid container direction="column" alignContent="center" alignItems="center">
				<Grid item xs={12}>
					<Typography
						variant="h4"
						align="center"
						color="secondary"
						className={classes.title}
					>
						Welcome
					</Typography>

					{isLoading && (
						<Typography variant="subtitle1" color="primary">
							Loading users...
						</Typography>
					)}
					{!isLoading && (
						<>
							<Typography variant="subtitle1" color="primary" align="center">
								Available users to join
							</Typography>

							<List>
								{allUsers.length > 0 &&
									allUsers
										.filter((user) => !user.online)
										.map((user) => (
											<Link
												key={user._id}
												to={`/chat-app/${user._id}`}
												className={classes.btn}
												onClick={() => handleSelectUser(user)}
											>
												<UserInfo
													avatarUrl={user.imageUrl}
													id={user._id}
													isButton
													userName={user.name}
													userLastName={user.lastName}
													withDivider
												/>
											</Link>
										))}
							</List>
						</>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => ({
	allUsers: state.users.allUsers,
	isLoading: state.users.loading,
});

// const loadData = (store) => {
// 	// For the connect tag we need Provider component but on the server at this moment app is not rendered yet
// 	// So we need to use store itself to load data
// 	return store.dispatch(fetchUsers()); // Manually dispatch a network request
// };

export default {
	component: connect(mapStateToProps, { fetchUsers, setActiveUser })(Welcome),
	// loadData,
};
