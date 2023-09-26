const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
con.connect((err) = {
    if(err) {
        console.log("error is connection");
    }
});

module.exports=con;












// const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/e-comm');