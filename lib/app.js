const { createServer } = require('http');
const { parse } = require('url');

// req is the request object
// res is the response object
const app = createServer((req, res) => {
  // parse the url into its parts
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Test</title>
    </head>
    <body>
      <h1>Colors Yo</h1>
      <ul>
        <li><a href="/red">RED</a></li>
        <li><a href="/green">GREEN</a></li>
        <li><a href="/blue">BLUE</li>
      </ul>
    </body>
    </html>`);
  } else if(pathname === '/red') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>red</title>
      <style>
        h1 {
          color: #D2624D
        }
        </style>
    </head>
    <body>
      <h1>This is red</h1>
    </body>
    </html>`);
  } else if(pathname === '/green') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>red</title>
      <style>
        h1 {
          color: #3C8B46
        }
        </style>
    </head>
    <body>
      <h1>green is a kewl color</h1>
    </body>
    </html>`);
  } else if(pathname === '/blue') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>red</title>
      <style>
        h1 {
          color: #2392A5
        }
        </style>
    </head>
    <body>
      <h1>i'm blue da ba dee da ba daa</h1>
    </body>
    </html>`);
  }
});

module.exports = app;
