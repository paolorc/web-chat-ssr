import {
	CLEAN_ALL_MESSAGES,
	FETCH_MESSAGES,
	FETCH_MESSAGES_ERROR,
	FETCH_MESSAGES_SUCCESSFUL,
	SEND_MESSAGE,
	SEND_MESSAGE_ERROR,
	SEND_MESSAGE_SUCCESSFUL,
	SET_PENDING_MESSAGE,
} from '../actions/messages';

const initialState = {
	allMessages: [],
	pendingMessages: [],
	sendingMessage: false,
	sendingMessageIdx: null,
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CLEAN_ALL_MESSAGES:
			return {
				...state,
				allMessages: [],
			};

		case FETCH_MESSAGES:
			return {
				...state,
				loading: true,
				error: false,
			};

		case FETCH_MESSAGES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		case FETCH_MESSAGES_SUCCESSFUL:
			return {
				...state,
				allMessages: action.payload.allMessages,
				loading: false,
			};

		case SEND_MESSAGE:
			return {
				...state,
				sendingMessage: true,
			};

		case SEND_MESSAGE_ERROR:
			return {
				...state,
				sendingMessage: false,
				error: action.payload.message,
			};

		case SEND_MESSAGE_SUCCESSFUL:
			return {
				...state,
				pendingMessages: state.pendingMessages.slice(
					sendingMessageIdx + 1,
					state.pendingMessages - 1,
				),
				sendingMessage: false,
				error: false,
			};

		case SET_PENDING_MESSAGE:
			return {
				...state,
				allMessages: [...state.allMessages, action.payload.message],
				pendingMessages: [...state.pendingMessages, action.payload.message],
				sendingMessageIdx: state.pendingMessages.length,
			};

		default:
			return state;
	}
};
