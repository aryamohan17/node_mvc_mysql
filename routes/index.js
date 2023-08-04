var express = require('express');
var router = express.Router();
// va inser_query_2 = require('../model/query')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/allData',cntrldata.cntrlConn)

module.exports = router;
