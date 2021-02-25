const initialState = {
	isHided: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE':
			return action.payload;

		default:
			return state;
	}
};
