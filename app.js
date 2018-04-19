const express = require('express');
const app = express();
const volleyball = require('volleyball');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache:true}); // point nunjucks to the proper directory for templates



// app.use(function(req,res,next) {
//   console.log(req.method, req.originalUrl, res.statusCode);
//   next();
// });

app.use(volleyball);
// app.use(morgan);
app.use('/', routes);

const locals = {
  title: 'An Example',
  people: [
    {name:'Gandalf'},
    {name:'Frodo'},
    {name:'Hermione'}
  ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err,output) {
  if(err) throw err;
  console.log(output);
});




app.listen('3000', () => {
  console.log('Server listening');
});
