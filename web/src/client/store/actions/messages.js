import axios from 'axios';

export const CLEAN_ALL_MESSAGES = 'CLEAN_ALL_MESSAGES';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR';
export const FETCH_MESSAGES_SUCCESSFUL = 'FETCH_MESSAGES_SUCCESSFUL';

export function cleanAllMessages() {
	return {
		type: CLEAN_ALL_MESSAGES,
	};
}

export function fetchMessages() {
	return async (dispatch) => {
		try {
			dispatch({
				type: FETCH_MESSAGES,
			});

			// const res = axios.get('url');
			const sleep = (ms) => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			};

			await sleep(1000);

			dispatch({
				type: FETCH_MESSAGES_SUCCESSFUL,
				payload: {
					allMessages: [
						{
							_id: '603c2d5f0891c30e8254a411',
							chatId: 'chat1',
							createdAt: new Date(),
							sender: {
								_id: '23423423532',
								name: 'Tiago',
								lastName: 'Del Rio',
								imageUrl: 'https://material-ui.com/static/images/avatar/2.jpg',
								online: false,
							},
							text: 'ESTOS MESAJES SON PENDEJOS!!!',
						},
						{
							_id: '603c2d5f0891c30e8254a410',
							chatId: 'chat1',
							createdAt: new Date(),
							sender: {
								_id: 'user1',
								name: 'Jefferson',
								lastName: 'Licet',
								imageUrl: 'https://material-ui.com/static/images/avatar/5.jpg',
							},
							text: 'asi es wey...',
						},
					],
				},
			});
		} catch (error) {
			dispatch({
				type: FETCH_MESSAGES_ERROR,
				payload: {
					message: error.message || 'Error fetching room messages',
				},
			});
		}
	};
}
