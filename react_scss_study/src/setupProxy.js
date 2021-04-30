const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/posts', {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true
    })
  );
};