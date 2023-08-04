var express = require('express');
var router = express.Router();
var democontrler = require('../cntrl/cntrlDemo')

router.get('/getData',democontrler.get_value,function (req,res,next) {
    var result = res.locals.result
    res.status(200).json(result)
    
})


module.exports = router;
