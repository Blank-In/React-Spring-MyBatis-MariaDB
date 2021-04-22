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
    const sql=`select * from test_user where id='${id}' AND pw='${pw}'`
    connection.query(sql,function(err,rows){
       if(!err){
           if(rows[0]!==undefined){
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
    let sql=`insert into test_user values('${id}','${pw}','${lore}')`;
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
    const sql=`select *,(select lore from test_user as u where p.id = u.id) as u_lore from posts as p`;
    connection.query(sql,function(err,rows) {
            res.send(rows);
    });
});

router.get('/addPost',function(req,res){
    const title=req.query.title;
    const lore=req.query.lore;
    const id=req.query.id;
    let sql=`insert into posts (title,lore,id,p_id) values('${title}','${lore}','${id}',(select ifnull(max(p_id),0)+1 from posts p2))`
    connection.query(sql);
    res.redirect("./getPosts");
})

router.get('/delPost', function (req,res){
    const sql=`DELETE FROM posts WHERE p_id=${req.query.p_id}`;
    connection.query(sql);
    res.redirect("./getPosts");
});

router.get('/getVote', function(req,res){
    let sql=`SELECT *,(SELECT COUNT(*) FROM user_vote WHERE vote=num) cnt,`+
        `if(num=(SELECT vote FROM user_vote WHERE id='${req.query.id}'),1,0) flg FROM vote_data`;
    connection.query(sql,function(err,rows){
        if(!err){
            res.send(rows);
        }
    });
})

router.get('/setVote', function(req,res){
    let sql=`insert into user_vote value('${req.query.id}',${req.query.vote})`
    connection.query(sql,function(err){
        if(err){
            sql=`update user_vote SET vote=${req.query.vote} WHERE id='${req.query.id}'`
            connection.query(sql);
        }
    });
    res.redirect("./getVote?id="+req.query.id);
})

router.get('/delVote', function(req,res){
    let sql=`DELETE FROM user_vote WHERE id='${req.query.id}'`
    connection.query(sql);
    res.redirect("./getVote?id="+req.query.id);
})

module.exports=router;