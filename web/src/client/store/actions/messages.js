import axios from 'axios';
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

export function fetchMessages() {
	return async (dispatch) => {
		try {
			async function subscribe() {
				dispatch({
					type: FETCH_MESSAGES,
				});
				const sleep = (ms) => {
					return new Promise((resolve) => setTimeout(resolve, ms));
				};

				await sleep(1000);

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
					await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
					await subscribe();
				}
			}
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
			dispatch({
				type: SEND_MESSAGE,
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

			console.log('Esta enviado mensaje en action: ', msgText);
			// const res = axios.get('url');
			const sleep = (ms) => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			};

			await sleep(2000);

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
