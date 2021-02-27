import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import { errorHandler } from './middlewares';
import routes from './routes';

const app = express();

// Basic express server configuration
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use('/public', express.static(path.join(__dirname, '../../dist/public')));
app.use('/assets', express.static(path.join(__dirname, './static/public')));

// Load routes
app.use(routes);

// error handler
router.use(errorHandler);

// NodeJS/express: Cache and 304 status code
app.disable('etag');

export default app;
