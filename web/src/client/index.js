import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { renderRoutes } from 'react-router-config';
// import Routes from './Routes';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState);

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
