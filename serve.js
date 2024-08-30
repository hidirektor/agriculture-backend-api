const express = require('express');
const app = express();
const routers = require('./routers');

app.get('/', function (req, res) {
  res.json('Agriculture BACK-END API');
});

app.use('/api/v1', routers.authRouter);

app.use((req, res, next) => {
  res.status(404).send('404 NOT FOUND');
});

module.exports = app;