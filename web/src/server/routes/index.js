import express from 'express';

import chatRoute from './chat';
import notFoundRoute from './notFound';
import welcomeRoute from './welcome';
import { wrapAsyncHandler } from '../utils';

const router = express.Router();

router.all('/', (_req, res) => {
	res.redirect('/welcome');
});

router.all('/chat-app', (_req, res) => {
	res.redirect('/welcome');
});
router.all('/chat-app/:chatId', wrapAsyncHandler(chatRoute));
router.all('/welcome', wrapAsyncHandler(welcomeRoute));

router.use('*', wrapAsyncHandler(notFoundRoute));

export default router;
