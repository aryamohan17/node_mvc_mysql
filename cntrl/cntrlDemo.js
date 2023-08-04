var modelData = require('../model/demoModel');

async function get_value(req,res,next) {
    var result =await modelData.get_value()
    res.locals.result = result;
    next()
}
module.exports={
    get_value
}












// var modelData = require('../model/query')

// const cntrlConn = (res,req)=>{
//     modelData.inner_join((err,result)=>{
//         if(err){
//             res.status(500).json({error:'internal error'})
//         }
//         else{
//             res.status(200).json(result)
//         }
//     })
// }
// module.exports={cntrlConn}