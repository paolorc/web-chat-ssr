import {
	CLEAN_ALL_MESSAGES,
	FETCH_MESSAGES,
	FETCH_MESSAGES_ERROR,
	FETCH_MESSAGES_SUCCESSFUL,
} from '../actions/messages';

const initialState = {
	allMessages: [],
	newMessages: [],
	pendingMessages: [],
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
				error: action.payload.allMessages,
			};

		case FETCH_MESSAGES_SUCCESSFUL:
			return {
				...state,
				allMessages: action.payload.allMessages,
				loading: false,
			};

		default:
			return state;
	}
};
