import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import { createStoreWithMiddleware } from '../../client/store';
import App from '../../client/App';

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

export default (req, res, initialState = {}) => {
	const store = createStoreWithMiddleware(initialState);
	// Render the component to a string
	const htmlContent = renderToString(
		<Provider store={store}>
			<App />
		</Provider>,
	);

	// Grab the initial state from our Redux store
	const preloadedState = store.getState();

	res.send(buildHtml(htmlContent, preloadedState));
};
