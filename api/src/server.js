const express = require('express');
const app = express();
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes');

// Basic express server configuration
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cors());

// Load routes
app.use(routes);

// NodeJS/express: Cache and 304 status code
app.disable('etag');

module.exports = app;
