const errorHandler = (_req, res) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	const errorMsg = {
		message: error.message,
		stack: !process.env('production') ? '🥞' : error.stack,
	};
	console.error(errorMsg);

	res.status(statusCode).json(errorMsg);
};

const notFound = (_, res) => {
	return res.status('404').json({
		message: 'No matched Route',
	});
};

module.exports = {
	errorHandler,
	notFound,
};
