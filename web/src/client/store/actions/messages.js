import request from '../../adapters/xhr';
import { v4 as uuid } from 'uuid';

import { SET_INACTIVE_USER } from './users';

export const CLEAN_ALL_MESSAGES = 'CLEAN_ALL_MESSAGES';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR';
export const FETCH_MESSAGES_SUCCESSFUL = 'FETCH_MESSAGES_SUCCESSFUL';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_SUCCESSFUL = 'SEND_MESSAGE_SUCCESSFUL';

export function cleanAllMessages() {
	return {
		type: CLEAN_ALL_MESSAGES,
	};
}

const PULLING_INTERVAL = 2 * 1000; // milliseconds
export function fetchMessages(chatId, currentUser) {
	return async (dispatch) => {
		// Todo: Review why this is not removing when page is destroyed
		try {
			async function subscribe() {
				console.log(currentUser);
				dispatch(validateSession(currentUser));
				dispatch({
					type: FETCH_MESSAGES,
				});

				try {
					const response = await request.get(`/chats/${chatId}/messages`);

					dispatch({
						type: FETCH_MESSAGES_SUCCESSFUL,
						payload: {
							allMessages: response.data,
						},
					});
					await new Promise((resolve) => setTimeout(resolve, PULLING_INTERVAL));

					await subscribe();
				} catch (error) {
					dispatch({
						type: FETCH_MESSAGES_ERROR,
						payload: {
							message: error.message || 'Error fetching messages',
						},
					});
					await subscribe();
				}
			}

			// Call pooling
			return subscribe();
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
			const message = {
				uuid: uuid(),
				chatId: chatId,
				createdAt: new Date(),
				sender: {
					_id: sender._id,
					name: sender.name,
				},
				text: msgText,
			};

			dispatch({
				type: SEND_MESSAGE,
				payload: {
					message,
				},
			});

			await request.post('/messages', {
				message,
			});

			dispatch({
				type: SEND_MESSAGE_SUCCESSFUL,
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

export function validateSession(currentUser) {
	return async (dispatch) => {
		const { data } = await request.get(`/users/${currentUser._id}`);

		if (data.connection !== currentUser.connection) {
			dispatch({ type: SET_INACTIVE_USER });
		}
	};
}
