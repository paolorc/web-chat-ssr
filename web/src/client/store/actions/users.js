import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_USERS_SUCCESSFUL = 'FETCH_USERS_SUCCESSFUL';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const SET_INACTIVE_USER = 'SET_INACTIVE_USER';

export function fetchUsers() {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_USERS,
			});
			// const res = axios.get('url');
			setTimeout(1000, () => {});

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
				type: FETCH_USERS,
			});
			// const res = axios.get('url');

			dispatch({
				type: SET_ACTIVE_USER,
				payload: {
					currentUser: user,
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

export function setInactiveUser() {}
