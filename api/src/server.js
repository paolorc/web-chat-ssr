const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { API_PREFIX } = require('./configs');
const { loader: mongooseLoader } = require('./configs/database');
const { errorHandler, notFound } = require('./middlewares');
const routes = require('./routes');

const app = express();

// Basic express server configuration
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());
app.use(cors());

mongooseLoader();
require('./models/Chat');
require('./models/Message');
// require('./models/User');

// Load routes
app.use(API_PREFIX, routes);

app.use(notFound);
app.use(errorHandler);

// NodeJS/express: Cache and 304 status code
app.disable('etag');

module.exports = app;
