const { createProxyMiddleware } = require('http-proxy-middleware');

const BACKEND_PORT = process.env.PORT || 6000;
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${BACKEND_PORT}`,
      changeOrigin: true,
    })
  );
};
