import {
	FETCH_ROOM_MESSAGES,
	FETCH_ROOM_MESSAGES_ERROR,
	FETCH_ROOM_MESSAGES_SUCCESSFUL,
} from '../actions/messages';

const initialState = {
	allMessages: [],
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ROOM_MESSAGES:
			return {
				...state,
				loading: true,
				error: false,
			};

		case FETCH_ROOM_MESSAGES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		case FETCH_ROOM_MESSAGES_SUCCESSFUL:
			return {
				...state,
				allUsers: action.payload.messages,
				loading: false,
				error: false,
			};

		default:
			return state;
	}
};
