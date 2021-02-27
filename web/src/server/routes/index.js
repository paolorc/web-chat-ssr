import express from 'express';

import chatRoute from './chat';
import notFoundRoute from './notFound';
import welcomeRoute from './welcome';
import { errorHandler } from './middlewares';
import wrapAsyncHandler from '../utils/wrapAsyncHandler';

const router = express.Router();

router.all('/', async (_req, res) => {
	res.redirect('/welcome');
});

router.all('/chat-app', async (_req, res) => {
	res.redirect('/welcome');
});
router.all('/chat-app/:chatId', wrapAsyncHandler(chatRoute));
router.all('/welcome', wrapAsyncHandler(welcomeRoute));

router.use('*', wrapAsyncHandler(notFoundRoute));
router.use(errorHandler);

export default router;
