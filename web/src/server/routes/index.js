import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderPage from '../utils/renderPage';
import Routes from '../../client/Routes';

import wrapAsyncHandler from '../utils/wrapAsyncHandler';

const router = express.Router();

router.get(
	'/',
	wrapAsyncHandler(async (req, res) => {
		const routes = matchRoutes(Routes, req.path);

		console.log(routes);

		// Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
		// Even if we get an error while loading data, we will still attempt to render page.
		const promises = routes.map(({ route }) => {
			return route.loadData ? route.loadData(store, id) : Promise.resolve(null);
		});

		// Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
		Promise.all(promises).then(() => {
			const context = {};
			const content = renderPage(req, context);

			if (context.notFound) {
				res.status(404);
			}

			res.send(content);
		});
	}),
);

// Redirect when not found
router.use('*', (_, res) => {
	// TODO: Reidrect to home?
	return res.status('404').json({
		message: 'No matched Route',
	});
});

export default router;
