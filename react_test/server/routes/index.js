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
               res.send("{\"flg\":false, \"lore\":\"아이디 또는 비밀번호가 틀렸습니다.\"}");
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
    connection.query(sql,function(err){
       if(!err){
           res.send("{\"flg\":true, \"status\":\"회원가입이 완료되었습니다.\"}");
       }
       else{
            res.send("{\"flg\":false, \"status\":\"이미 존재하는 아이디입니다.\"}");
        }
    });
});

router.get('/getPosts', function(req,res){
    const sql='SELECT *,(SELECT lore FROM test_user u WHERE p.id=u.id)u_lore FROM posts p';
    connection.query(sql,function(err,rows) {
        if(!err){
            res.send(rows);
        }
    });
});

router.get('/addPost',function(req,res){
    const title=req.query.title;
    const lore=req.query.lore;
    const id=req.query.id;
    let sql='insert into posts (title,lore,id,p_id) values(\''+title+'\',\''+lore+'\',\''+id+'\',(select max(p_id)+1 from posts p2))'
    connection.query(sql);
    res.redirect("./getPosts");
})

router.get('/delPost', function (req,res){
    const sql='DELETE FROM posts WHERE p_id='+req.query.p_id;
    connection.query(sql);
    res.redirect("./getPosts");
});

module.exports=router;