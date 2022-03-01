const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "https://myplaidback.azurewebsites.net/:8000",
      changeOrigin: true
    })
  );
};
