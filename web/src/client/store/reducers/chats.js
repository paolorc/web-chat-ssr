import {
	CLEAN_ALL_CHATS,
	FETCH_CHATS,
	FETCH_CHATS_ERROR,
	FETCH_CHATS_SUCCESSFUL,
	SET_CURRENT_CHAT,
	SET_CURRENT_CHAT_SUCCESSFUL,
	SET_CURRENT_CHAT_ERROR,
} from '../actions/chats';

const initialState = {
	allChats: [],
	currentChat: {},
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CLEAN_ALL_CHATS:
			return {
				...state,
				allChats: [],
				currentChat: {},
			};

		case FETCH_CHATS:
			return {
				...state,
				currentChat: {},
				loading: true,
				error: false,
			};

		case FETCH_CHATS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		case FETCH_CHATS_SUCCESSFUL:
			return {
				...state,
				allChats: action.payload.allChats,
				loading: false,
			};

		case SET_CURRENT_CHAT:
			return {
				...state,
				loading: true,
				error: false,
			};

		case SET_CURRENT_CHAT_SUCCESSFUL:
			return {
				...state,
				currentChat: action.payload.currentChat,
				loading: false,
			};

		default:
			return state;
	}
};
