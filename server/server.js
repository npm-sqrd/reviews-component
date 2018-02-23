const express = require('express');
var app = express();

app.get('/', (request, response) => response.send('Hello World!'));

app.listen(3000, () => console.log('Server Up on port: Over 3000!'));

module.exports = app;