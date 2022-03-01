const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://plaidbacknode.eastus.azurecontainer.io:8000",
      changeOrigin: true
    })
  );
};
