import axios from 'axios';

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

export function fetchChats() {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_CHATS,
			});

			// const res = axios.get('url');
			const sleep = (ms) => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			};

			await sleep(2000);

			dispatch({
				type: FETCH_CHATS_SUCCESSFUL,
				payload: {
					allChats: [
						{
							_id: 'chat1',
							lastMessage: 'This is the last message ver long to read and over time',
							members: [
								{
									_id: 'user1',
									name: 'Jefferson',
									lastName: 'Licet',
									imageUrl: 'https://material-ui.com/static/images/avatar/5.jpg',
								},
								{
									_id: '23423423532',
									name: 'Tiago',
									lastName: 'Del Rio',
									imageUrl: 'https://material-ui.com/static/images/avatar/2.jpg',
								},
							],
						},
						{
							_id: 'chat2',
							lastMessage: 'Hola carnalito como te ha ido man!???',
							members: [
								{
									_id: 'user1',
									name: 'Paolo',
									lastName: 'Reyes',
									imageUrl: 'https://material-ui.com/static/images/avatar/1.jpg',
								},
								{
									_id: '23423423532',
									name: 'Tiago',
									lastName: 'Del Rio',
									imageUrl: 'https://material-ui.com/static/images/avatar/2.jpg',
								},
							],
						},
					],
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
		// const res = axios.get('url');

		dispatch({
			type: SET_CURRENT_CHAT_SUCCESSFUL,
			payload: {
				currentChat: chat,
			},
		});
	};
}
