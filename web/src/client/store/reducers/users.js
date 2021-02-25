import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESSFUL } from '../actions/users';

const initialState = {
	allUsers: [],
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
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
				error: false,
			};

		default:
			return state;
	}
};
