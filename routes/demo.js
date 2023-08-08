var express = require('express');
var router = express.Router();
var democontrler = require('../cntrl/cntrlDemo')

router.get('/getData',democontrler.get_value,function (req,res,next) {
    // var result = res.locals.result
    // res.status(200).json(result)

    if(res.locals.result==0){
        var result ={
            'status':false,
            'msg':"some error exist",
            result:[]
        }
        res.status(400).json(result)
    }
    else{
        var result ={
            'status':200,
            'msg':"sucessfully loaded",
            result:res.locals.result
        }
        res.status(200).json(result)
    
    }

    
})

router.post('/marks_sum/:rollNum',democontrler.marks_sum_,function (req,res,next) {
 
    if(res.locals.result==0){
        var result ={
            'status':false,
            'msg':"some error exist",
            result:[]
        }
        res.status(400).json(result)
    }
    else{
        var result ={
            'status':200,
            'msg':"sucessfully loaded",
            result:res.locals.result
        }
        res.status(200).json(result)
    
    } 
    
}
)

module.exports = router;
