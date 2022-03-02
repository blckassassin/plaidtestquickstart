const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({      
      target: process.env.REACT_APP_API_HOST || "https://myplaidback.azurewebsites.net:8000",
      changeOrigin: true
    })
  );
};
