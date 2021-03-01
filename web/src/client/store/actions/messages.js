import request from '../../adapters/xhr';
import { v4 as uuid } from 'uuid';

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

export function fetchMessages(chatId) {
	return async (dispatch) => {
		try {
			async function subscribe() {
				dispatch({
					type: FETCH_MESSAGES,
				});

				const response = await request.get(`/chats/${chatId}/messages`);

				if (false) {
					// Connection timeout
					// happens when the connection was pending for too long
					// let's reconnect
					dispatch({
						type: FETCH_MESSAGES_ERROR,
						payload: {
							message: error.message || 'Error fetching messages',
						},
					});
					await subscribe();
				} else {
					// set a timeout and re call
					dispatch({
						type: FETCH_MESSAGES_SUCCESSFUL,
						payload: {
							allMessages: response.data,
						},
					});
					await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
					await subscribe();
				}
			}

			// Call pooling
			subscribe();
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

			console.log('Esta enviado mensaje en action: ', msgText);
			await request.post('/messages', {
				message,
			});

			console.log('Acabo mensaje: ', msgText);
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
