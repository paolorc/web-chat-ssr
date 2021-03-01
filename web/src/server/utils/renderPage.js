import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { ThemeProvider } from '@material-ui/core/styles';

import { createStoreWithMiddleware } from '../../client/store';
import Routes from '../../client/Routes';
import template from './template';
import theme from '../../client/theme';

const loadRoutesData = (pathLocation, store) => {
	const routes = matchRoutes(Routes, pathLocation);

	// Execute all loadData functions, even if we have an error on this
	// we still render the page
	const promises = routes.map(({ route, match }) => {
		const { params } = match;

		return route.loadData ? route.loadData(store, params) : Promise.resolve(null);
	});

	return Promise.all(promises);
};

export default async ({ req, res, pageTitle, initialState = {} }) => {
	const { path } = req;
	const store = createStoreWithMiddleware(initialState);

	// Preload all inital data needed for all routes pages!
	await loadRoutesData(path, store);

	const context = {};
	// Render the component to a string
	const htmlContent = renderToString(
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router location={path} context={context}>
					{renderRoutes(Routes)}
				</Router>
			</ThemeProvider>
		</Provider>,
	);

	if (context.notFound) {
		res.status(404);
	}

	// Grab the initial state from our Redux store
	const preloadedState = store.getState();
	console.log(`preloadedState: ${JSON.stringify(preloadedState)}`);

	res.send(template({ htmlContent, pageTitle, preloadedState }));
};
