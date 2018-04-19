const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});




module.exports = router;


// ../public/stylsheets/style.css






// router.get('/', function(req,res,next) {
//   res.render('index', locals);
// });

// router.get('/news', function(req,res,next) {
//   res.send('This is the news page.');

// });
