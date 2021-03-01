import axios from 'axios';
import { v4 as uuid } from 'uuid';

export const CLEAN_ALL_MESSAGES = 'CLEAN_ALL_MESSAGES';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR';
export const FETCH_MESSAGES_SUCCESSFUL = 'FETCH_MESSAGES_SUCCESSFUL';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_SUCCESSFUL = 'SEND_MESSAGE_SUCCESSFUL';
export const SET_PENDING_MESSAGE = 'SET_PENDING_MESSAGE';

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
							uuid: '603c2d5f0891c30e8254a411',
							chatId: 'chat1',
							createdAt: new Date(),
							sender: {
								_id: '23423423532',
								name: 'Tiago',
							},
							text: 'ESTOS MESAJES SON PENDEJOS!!!',
						},
						{
							uuid: '603c2d5f0891c30e8254a410',
							chatId: 'chat1',
							createdAt: new Date(),
							sender: {
								_id: 'user1',
								name: 'Jefferson',
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
					message: error.message || 'Error fetching messages',
				},
			});
		}
	};
}

export function sendMessage({ chatId, msgText, sender }) {
	return async (dispatch) => {
		try {
			dispatch({
				type: SEND_MESSAGE,
			});

			// const res = axios.get('url');
			const sleep = (ms) => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			};

			await sleep(2000);

			dispatch({
				type: SEND_MESSAGE_SUCCESSFUL,
				payload: {
					message: {
						uuid: uuid(),
						chatId: chatId,
						createdAt: new Date(),
						sender: {
							_id: sender._id,
							name: sender.name,
						},
						text: msgText,
					},
				},
			});
		} catch (error) {
			dispatch({
				type: SEND_MESSAGE_ERROR,
				payload: {
					message: error.message || 'Error sending a message',
				},
			});
		}
	};
}

export function setPendingMessage({ chatId, msgText, sender }) {
	return {
		type: SET_PENDING_MESSAGE,
		payload: {
			message: {
				uuid: uuid(),
				chatId: chatId,
				createdAt: new Date(),
				sender: {
					_id: sender._id,
					name: sender.name,
				},
				text: msgText,
			},
		},
	};
}
