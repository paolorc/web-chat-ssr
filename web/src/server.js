const express = require('express')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

// View engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')

// Basic express server configuration
app.use(express.json({ limit: '16mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

// Load routes
app.use(routes)

// NodeJS/express: Cache and 304 status code
app.disable('etag')

module.exports = app
