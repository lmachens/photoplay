const dotenv = require('dotenv');
dotenv.config();

const { createProxyMiddleware } = require('http-proxy-middleware');

const BACKEND_PORT = process.env.PORT;
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${BACKEND_PORT}`,
      changeOrigin: true,
    })
  );
};
