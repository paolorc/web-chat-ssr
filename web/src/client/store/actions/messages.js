import axios from 'axios';

export const FETCH_ROOM_MESSAGES = 'FETCH_ROOM_MESSAGES';
export const FETCH_ROOM_MESSAGES_ERROR = 'FETCH_ROOM_MESSAGES_ERROR';
export const FETCH_ROOM_MESSAGES_SUCCESSFUL = 'FETCH_ROOM_MESSAGES_SUCCESSFUL';

export function fetchRoomMessages() {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_ROOM_MESSAGES,
			});

			const res = axios.get('url');

			dispatch({
				type: FETCH_ROOM_MESSAGES_SUCCESSFUL,
				payload: {
					messages: res.data,
				},
			});
		} catch (error) {
			dispatch({
				type: FETCH_ROOM_MESSAGES_ERROR,
				payload: {
					message: error.message || 'Error fetching room messages',
				},
			});
		}
	};
}

export function setActiveUser() {}

export function setInactiveUser() {}
