import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

// Include additional middlewares here
const middlewares = [thunk];

export const rootReducer = combineReducers(reducers);

export const createStoreWithMiddleware = (initialState = {}) => {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);
};
