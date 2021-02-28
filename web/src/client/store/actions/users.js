import axios from 'axios';

export const CLEAN_ALL_USERS = 'CLEAN_ALL_USERS';
export const CLEAN_CURRENT_USER = 'CLEAN_CURRENT_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_SUCCESSFUL = 'FETCH_USERS_SUCCESSFUL';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const SET_ACTIVE_USER_ERROR = 'SET_ACTIVE_USER_ERROR';
export const SET_ACTIVE_USER_SUCCESSFUL = 'SET_ACTIVE_USER_SUCCESSFUL';
export const SET_INACTIVE_USER = 'SET_INACTIVE_USER';

export function cleanCurrentUser() {
	return {
		type: CLEAN_CURRENT_USER,
	};
}

export function cleanAllUsers() {
	return {
		type: CLEAN_ALL_USERS,
	};
}

export function fetchUsers() {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_USERS,
			});

			const sleep = (ms) => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			};

			// await sleep(2000);
			// const res = axios.get('url');

			dispatch({
				type: FETCH_USERS_SUCCESSFUL,
				payload: {
					allUsers: [
						{
							_id: '23423423532',
							name: 'Tiago',
							lastName: 'Del Rio',
							imageUrl: 'https://material-ui.com/static/images/avatar/2.jpg',
							online: false,
						},
					],
				},
			});
		} catch (error) {
			dispatch({
				type: FETCH_USERS_ERROR,
				payload: {
					message: error.message || 'Error fetching users',
				},
			});
		}
	};
}

export function setActiveUser(user) {
	return async (dispatch) => {
		try {
			dispatch({
				type: SET_ACTIVE_USER,
			});
			// const res = axios.get('url');

			dispatch({
				type: SET_ACTIVE_USER_SUCCESSFUL,
				payload: {
					currentUser: { ...user, online: true },
				},
			});
		} catch (error) {
			dispatch({
				type: SET_ACTIVE_USER_ERROR,
				payload: {
					message: error.message || 'Error fetching users',
				},
			});
		}
	};
}

export function setInactiveUser() {}
