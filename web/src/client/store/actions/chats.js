import request from '../../adapters/xhr';

export const CLEAN_ALL_CHATS = 'CLEAN_ALL_CHATS';
export const FETCH_CHATS = 'FETCH_CHATS';
export const FETCH_CHATS_ERROR = 'FETCH_CHATS_ERROR';
export const FETCH_CHATS_SUCCESSFUL = 'FETCH_CHATS_SUCCESSFUL';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
export const SET_CURRENT_CHAT_SUCCESSFUL = 'SET_CURRENT_CHAT_SUCCESSFUL';

export function cleanAllChats() {
	return {
		type: CLEAN_ALL_CHATS,
	};
}

export function fetchChats(userId) {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_CHATS,
			});

			const response = await request.get(`/users/${userId}/chats`);

			dispatch({
				type: FETCH_CHATS_SUCCESSFUL,
				payload: {
					allChats: response.data,
				},
			});
		} catch (error) {
			dispatch({
				type: FETCH_CHATS_ERROR,
				payload: {
					message: error.message || 'Error fetching room messages',
				},
			});
		}
	};
}

export function setCurrentChat(chat) {
	return async (dispatch) => {
		dispatch({
			type: SET_CURRENT_CHAT,
		});

		// Here goes some request or something...

		dispatch({
			type: SET_CURRENT_CHAT_SUCCESSFUL,
			payload: {
				currentChat: chat,
			},
		});
	};
}
