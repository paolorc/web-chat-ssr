// Wrap an `async` handler to catch errors and call `next`, otherwise requests
// with errors can hang indefinitely.
const wrapAsyncHandler = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = wrapAsyncHandler;
