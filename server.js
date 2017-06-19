const express = require('express');
const convertTime = require('./time-converter');
const ejs = require('ejs');

const app = express();
app.set('views', `${__dirname}/views`);
app.engine('html', ejs.renderFile);
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index.html');
});

app.get('/:time', (request, response) => {
  const time = request.params.time;
  const body = convertTime(time);

  response.json(body);
});

app.listen(8080);

module.exports = app;
