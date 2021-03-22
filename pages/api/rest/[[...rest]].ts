import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

const proxy = createProxyMiddleware({
  target: process.env.API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api/rest': '/'
  }
});

export default proxy;
