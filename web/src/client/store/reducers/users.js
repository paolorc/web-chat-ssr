import {
	CLEAN_ALL_USERS,
	FETCH_USERS,
	FETCH_USERS_ERROR,
	FETCH_USERS_SUCCESSFUL,
	SET_ACTIVE_USER,
	SET_ACTIVE_USER_ERROR,
	SET_ACTIVE_USER_SUCCESSFUL,
	SET_INACTIVE_USER,
} from '../actions/users';

const initialState = {
	allUsers: [],
	currentUser: {},
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CLEAN_ALL_USERS:
			return {
				...state,
				allUsers: [],
			};

		case FETCH_USERS:
			return {
				...state,
				currentUser: {},
				loading: true,
				error: false,
			};

		case FETCH_USERS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		case FETCH_USERS_SUCCESSFUL:
			return {
				...state,
				allUsers: action.payload.allUsers,
				loading: false,
			};

		case SET_ACTIVE_USER:
			return {
				...state,
				currentUser: action.payload.currentUser,
				loading: true,
				error: false,
			};

		case SET_ACTIVE_USER_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.message,
			};

		case SET_ACTIVE_USER_SUCCESSFUL:
			return {
				...state,
				currentUser: { ...state.currentUser, connection: action.payload.connection },
				loading: false,
			};

		case SET_INACTIVE_USER:
			return {
				...state,
				currentUser: {},
			};

		default:
			return state;
	}
};
