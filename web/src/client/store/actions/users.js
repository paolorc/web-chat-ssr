import { v4 as uuid } from 'uuid';

import request from '../../adapters/xhr';

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

			const response = await request.get('/users');

			dispatch({
				type: FETCH_USERS_SUCCESSFUL,
				payload: {
					allUsers: response.data,
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
				payload: {
					currentUser: user,
				},
			});
			const response = await request.post(`/users/${user._id}/connect`, {
				connection: uuid(),
			});

			dispatch({
				type: SET_ACTIVE_USER_SUCCESSFUL,
				payload: {
					connection: response.data.connection,
				},
			});
		} catch (error) {
			dispatch({
				type: SET_ACTIVE_USER_ERROR,
				payload: {
					message: error.message || 'Error activating a user',
				},
			});
		}
	};
}

export function setInactiveUser() {
	return {
		type: SET_INACTIVE_USER,
	};
}
