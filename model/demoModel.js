// import database
var db_connect = require('../database').connection_

// insert query for mark table

// const insert_query = db_connect.execute('INSERT INTO `mark_`(`rollNum`, `mathsMark`, `scienceMark`, `englishMark`) VALUES ("5","27","28","37")')

// insert query for student table

// const insert_query_ = db_connect.execute('INSERT INTO `student_`(`rollNum`, `name`, `address`) VALUES ("5","aju","yathryil")')
// inner join
async function get_value() {
    const insert_inner_join = 'SELECT mark_.rollNum , mark_.mathsMark, student_.rollNum from mark_ INNER JOIN student_ on mark_.rollNum=student_.rollNum '
    var result = await db_connect.query(insert_inner_join);
    if(result[0].length != 0){
        return result[0];
    }else{
        return [];
    }
}

// module.exports = { insert_query, insert_query_, inner_join }
module.exports = {get_value }