const express = require('express');
const app = express();
const volleyball = require('volleyball');
const morgan = require('morgan');

// app.use(function(req,res,next) {
//   console.log(req.method, req.originalUrl, res.statusCode);
//   next();
// });

// app.use(volleyball);
app.use(morgan);

app.get('/', function(req,res,next) {
  res.send('TWITTER IS WORKING!');
});

app.get('/news', function(req,res,next) {
  res.send('This is the news page.');

});

app.listen('3000', () => {
  console.log('Server listening');
});
