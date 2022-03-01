const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "https://plaidbacknode.eastus.azurecontainer.io:8000",
      changeOrigin: true
    })
  );
};
