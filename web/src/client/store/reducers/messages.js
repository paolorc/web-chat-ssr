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
	fetchError: false,
	loading: false,
	pulling: false,
	sendingMessage: false,
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
				pulling: true,
				fetchError: false,
			};

		case FETCH_MESSAGES_ERROR:
			return {
				...state,
				pulling: false,
				fetchError: action.payload.message,
			};

		case FETCH_MESSAGES_SUCCESSFUL:
			return {
				...state,
				allMessages: action.payload.allMessages,
				pulling: false,
			};

		case SEND_MESSAGE:
			return {
				...state,
				allMessages: [...state.allMessages, action.payload.message],
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
				sendingMessage: false,
				error: false,
			};

		default:
			return state;
	}
};
