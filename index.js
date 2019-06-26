const { createServer } = require('http');
const { parse } = require('url');
const app = require('./lib/app');

app.listen(8888, () => {
  console.log('listening')
});