"use strict";

const httpProxyMiddleware2 = require("http-proxy-middleware-2");
const createProxyMiddleware =
  httpProxyMiddleware2.createProxyMiddleware || httpProxyMiddleware2;

function httpProxyMiddleware(context, options) {
  return createProxyMiddleware(context, options);
}

Object.assign(httpProxyMiddleware, httpProxyMiddleware2);
httpProxyMiddleware.createProxyMiddleware = createProxyMiddleware;
httpProxyMiddleware.default = httpProxyMiddleware;

module.exports = httpProxyMiddleware;
