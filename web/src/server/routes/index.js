import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import serialize from 'serialize-javascript';

import usersReducers from '../../client/reducers/usersReducers';
import reducers from '../../client/reducers';

import App from '../../client/App';

const router = express.Router();

// const calculateRoutes = require('./calculate');

function handleRender(req, res) {
    // Compile an initial state
    const preloadedState = { users: [] };

    // Create a new Redux store instance
    const store = createStore(reducers, preloadedState);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>,
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, preloadedState) {
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
}

router.get('/', async (req, res) => {
    handleRender(req, res);
});

// Redirect when not found
router.use('*', (_, res) => {
    return res.status('404').json({
        message: 'No matched Route',
    });
});

export default router;
