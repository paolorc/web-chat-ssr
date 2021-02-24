import express from 'express';

import renderPage from '../utils/renderPage';

const router = express.Router();

router.get('/', async (req, res) => {
	renderPage(req, res);
});

// Redirect when not found
router.use('*', (_, res) => {
	// TODO: Reidrect to home?
	return res.status('404').json({
		message: 'No matched Route',
	});
});

export default router;
