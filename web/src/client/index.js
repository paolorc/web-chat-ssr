import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from '@material-ui/core/styles';

import { createStoreWithMiddleware } from './store';
import Routes from './Routes';
import theme from './theme';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStoreWithMiddleware(preloadedState);
const renderMethod = module.hot ? hydrate : render;

renderMethod(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Router>{renderRoutes(Routes)}</Router>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
);
