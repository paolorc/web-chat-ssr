const { PORT } = require('./configs');
const server = require('./server');

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
