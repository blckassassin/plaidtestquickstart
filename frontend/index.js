const express = require('express');
const path = require('path');
var proxy = require('http-proxy-middleware');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var options = {
    target: 'http://localhost:8000',
    changeOrigin: true
}

var proxxy = proxy(options);

app.use('/api', proxxy);
app.listen(3000);