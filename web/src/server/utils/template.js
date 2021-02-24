import serialize from 'serialize-javascript';

export default ({ html = '', pageTitle = 'Default title', preloadedState = {} }) => {
	return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${pageTitle}</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
          </script>
          <script src="/public/bundle.js"></script>
        </body>
      </html>
  `;
};
