const mysql =require("mysql");

const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"test"
});

con.connect((err)=>{
    if (err) {
        console.log("error");    
    }
    else
    {
        console.log("connected");
    }
});











// const express=require('express');
// const EventEmitter=require('events');
// const app=express();
// const event=new EventEmitter();

// let count=0

// event.on("countAPI",()=>{
//     count++;
//     console.log("event called",count)
// });

// app.get('/', (req,resp)=>{
//     resp.send("api callled")
//     event.emit("countAPI")
// });

// app.get('/search', (req,resp)=>{
//     resp.send("search api callled");
//     event.emit("countAPI")
// });

// app.get('/upload', (req,resp)=>{
//     resp.send("upload api callled");
//     event.emit("countAPI")
// });

// app.listen(5000);











// const { log } = require('console');
// const os=require('os');
// // console.log(os.arch());
// // console.log(os.freemem()/(1024*1024*1024));
// // console.log(os.totalmem()/(1024*1024*1024));
// // console.log(os.hostname());
// // console.log(os.platform());
// console.log(os.userInfo());



// const express=require('express');
// const multer=require('multer');
// const app=express();

// const upload= multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file.fieldname+"-"+Date.now() +".jpg")
//         }
//     })
// }).single("user_file");

// app.post('/upload', upload,(req, resp)=>{
//     resp.send("File upload");
// });

// app.listen(5000);




// const express = require('express');
// require('./config');
// const Product=require('./product');

// const app=express();
// app.use(express.json());

// app.get('/search/:key', async(req, resp) =>{
//     console.log(req.params.key);
//     let data= await Product.find(
//         {
//             "$or":[
//                 { "name":{$regex:req.params.key}},
//                 { "brand":{$regex:req.params.key}},
//                 { "category":{$regex:req.params.key}}
//             ]
//         }
//         )
//     resp.send(data);
// });

// app.listen(5000);















// app.post('/create', async(req,resp)=>{
//     let data= new Product(req.body);
//     let result= await data.save();
//     console.log(result);
//     resp.send(result);
// });

// app.get('/list', async(req,resp)=>{
//     let data=await Product.find();
//     resp.send(data);
// });

// app.delete('/delete/:_id', async(req,resp)=>{
//     console.log(req.params);
//     let data=await Product.deleteOne(req.params);
//     resp.send(data);
// });

// app.put('/update/:_id', async(req,resp)=>{
//     console.log(req.params);
//     let data=await Product.updateOne(
//         req.params,
//         {$set:req.body}
        
//         );
//     resp.send(data);
// });

// app.listen(5000);