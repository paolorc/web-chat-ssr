import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import { errorHandler } from './middlewares';
import routes from './routes';

const app = express();
// const CSPConfig = {
// 	directives: {
// 		// api calls
// 		connectSrc: ["'self'", 'iovlabs-chat.herokuapp.com'],
// 		// fallback directive
// 		defaultSrc: ["'self'"],
// 		fontSrc: ["'self'", 'fonts.gstatic.com', 'use.fontawesome.com', 'fonts.googleapis.com'],
// 		imgSrc: ['*'],
// 		scriptSrc: ['*'],
// 		styleSrc: ['*'],
// 	},
// };

// Basic express server configuration
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: false }));
// app.use(helmet.contentSecurityPolicy(CSPConfig));
app.use(cors());

app.use('/public', express.static(path.join(__dirname, '../../dist/public')));
app.use('/assets', express.static(path.join(__dirname, './static/public')));

// Load routes
app.use(routes);

// error handler
app.use(errorHandler);

// NodeJS/express: Cache and 304 status code
app.disable('etag');

export default app;
