const express=require('express');
const router=express.Router();
const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    post:3306,
    user:'blank',
    password:'',
    database:'test_db'
});
connection.connect();

router.get('/', (
    req,
    res)=>res.json({username:'blank'})
);

router.get('/login', function (req,res){
    const id=req.query.id;
    const pw=req.query.pw;
    const sql='select * from test_user where id=\''+id+'\' AND pw=\''+pw+'\';'
    connection.query(sql,function(err,rows){
       if(!err){
           if(rows[0]!=undefined){
               res.send("{\"flg\":true, \"lore\":\""+rows[0].lore+"\"}");
           }
           else{
               res.send("{\"flg\":false, \"lore\":\"\"}");
           }
       }
       else{
           res.send("{\"flg\":false, \"lore\":\"\"}");
       }
    });
});

router.get('/register',function (req,res){
    const id=req.query.id;
    const pw=req.query.pw;
    const lore=req.query.lore;
    let sql='insert into test_user values(\''+id+'\',\''+pw+'\',\''+lore+'\');';
    console.log(sql);
    connection.query(sql,function(err){
       if(!err){
           res.send("{\"flg\":true, \"status\":\"회원가입이 완료되었습니다.\"}");
       }
       else{
            res.send("{\"flg\":false, \"status\":\"이미 존재하는 아이디입니다.\"}");
        }
    });
});

module.exports=router;