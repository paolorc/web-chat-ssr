import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_SUCCESSFUL = 'FETCH_USERS_SUCCESSFUL';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const SET_INACTIVE_USER = 'SET_INACTIVE_USER';

export function fetchUsers() {
	return async (dispatch) => {
		try {
			// const res = axios.get('url');

			dispatch({
				type: FETCH_USERS_SUCCESSFUL,
				payload: {
					allUsers: res.data,
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

export function setActiveUser() {}

export function setInactiveUser() {}
