import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import { createStoreWithMiddleware } from '../../client/store';
import Routes from '../../client/Routes';

const buildHtml = (html, preloadedState) => {
	return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/recipes/server-rendering/#security-considerations
            window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
          </script>
          <script src="/public/bundle.js"></script>
        </body>
      </html>
  `;
};

export default (req, context, initialState = {}) => {
	const store = createStoreWithMiddleware(initialState);
	// Render the component to a string
	const htmlContent = renderToString(
		<Provider store={store}>
			<Router location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</Router>
		</Provider>,
	);

	// Grab the initial state from our Redux store
	const preloadedState = store.getState();

	return buildHtml(htmlContent, preloadedState);
};
