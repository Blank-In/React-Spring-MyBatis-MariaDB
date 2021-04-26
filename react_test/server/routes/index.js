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

router.get('/', function(req, res){
    res.send(`{'username':'blank'}`);
});

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
});

router.get('/delPost', function (req,res){
    const sql=`DELETE FROM posts WHERE p_id=${req.query.p_id}`;
    connection.query(sql);
    res.redirect("./getPosts");
});

router.get('/getVote', function(req,res){
    let sql=`SELECT *,(SELECT COUNT(*) FROM user_vote WHERE vote = num) cnt
        ,if(num = (SELECT vote FROM user_vote WHERE id = '${req.query.id}'), 1, 0) flg
        FROM vote_data`;
    connection.query(sql,function(err,rows){
        if(!err){
            res.send(rows);
        }
    });
});

router.get('/setVote', function(req,res){
    let sql=`insert into user_vote value('${req.query.id}',${req.query.vote})`
    connection.query(sql,function(err){
        if(err){
            sql=`update user_vote SET vote=${req.query.vote} WHERE id='${req.query.id}'`
            connection.query(sql);
        }
    });
    res.redirect("./getVote?id="+req.query.id);
});

router.get('/delVote', function(req,res){
    let sql=`DELETE FROM user_vote WHERE id='${req.query.id}'`
    connection.query(sql);
    res.redirect("./getVote?id="+req.query.id);
});

router.get('/getScore', function (req,res){
    let sql=`select * from score_board`
    connection.query(sql,function(err,rows){
        if(!err){
            res.send(rows);
        }
    });
});

router.get('/addScore',function(req,res){
    const add=parseInt(req.query.add);
    const id=parseInt(req.query.id);
    let score,cnt;
    let sql=`select * from score_board where id=${id}`;
    //쿼리를 실행하면 작동하지 않고 에러가 발생해 아래쪽 b 출력으로 감
    connection.query(sql,function(err,rows){
        if(!err){
            score=rows[0].score;
            cnt=rows[0].cnt;
            sql=`update score_board set score=${(score * cnt + add) / (cnt + 1)}, cnt=${cnt + 1} where id=${id}`;
            connection.query(sql);
        }
        else{
            console.log(err);
        }
    });
    res.redirect("./getScore");
});

router.get('/getNotices', function(req,res){
    const sql=`select * from notice`;
    connection.query(sql,function(err,rows){
       if(!err){
           res.send(rows);
       }
    });
})

router.get('/getBoard',function(req,res){
    const sql=`select game from boards where b_id=${req.query.id}`;
    console.log(sql);
    connection.query(sql,function(err,rows){
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
});

router.get('/setBoard',function(req,res){
    const sql=`insert into boards(b_id,game) values (${req.query.id},${req.query.board})`;
    console.log(sql);
    connection.query(sql,function(err,rows){
        res.send(err);
    });
});

router.get('/boardMatching',function(req,res){
    let sql=`select * from boards where b_id='matching'`;
    connection.query(sql,function(err,rows){
        if(rows[0].turn===0){ //대기자가 없음 매칭을 기다려야함
            sql=`update boards set game='${req.query.id}', turn=1 where b_id='matching'`;
            connection.query(sql);
            res.send(`{"matching":"false"}`);
        }
        else{ //대가지가 있음 게임을 시작하면 됨
            sql=`update boards set game='${req.query.id}', turn=0 where b_id='matching'`;
            connection.query(sql);
            res.send(`{"matching":"${rows[0].game}"}`);
        }
    });
})

router.get('/findMatching',function(req,res){
    const sql=`select * from boards where b_id='matching'`;
    connection.query(sql,function(err,rows){
        if(rows[0].turn===0){ //매칭이 잡혔음
            res.send(`{"matching":"${rows[0].game}"}`);
        }
        else{
            res.send(`{"matching":"false"}`);
        }
    })
})

module.exports=router;