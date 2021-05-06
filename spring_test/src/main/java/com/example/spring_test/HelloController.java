package com.example.spring_test;

import com.example.spring_test.myBatis.DAO.*;
import com.example.spring_test.myBatis.VO.*;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:/web/WEB-INF/applicationContext.xml"})
@RestController
@RequestMapping("/api")
public class HelloController {

    UserDAO userDAO = new UserDAO();
    PostDAO postDAO = new PostDAO();
    VoteDAO voteDAO = new VoteDAO();
    ScoreDAO scoreDAO = new ScoreDAO();
    BoardDAO boardDAO = new BoardDAO();
    CanvasDAO canvasDAO = new CanvasDAO();

    @PostMapping("/test")
    public String test(HttpServletRequest request) {
        String value = "";
        value += request.getRemoteAddr() + " | ";
        value += request.getRequestURI() + " | ";
        value += request.getMethod();
        System.out.println(value);
        return value;
    }

    @PostMapping("/register")
    public String Register(@RequestBody Map<String, String> req) {
        UserVO userVO = new UserVO();
        userVO.setId(req.get("id"));
        userVO.setPw(req.get("pw"));
        userVO.setLore(req.get("lore"));
        try {
            userDAO.registerUser(userVO);
        } catch (Exception e) {
            return "{\"flg\":false, \"status\":\"이미 존재하는 아이디입니다.\"}";
        }
        return "{\"flg\":true, \"status\":\"회원가입이 완료되었습니다.\"}";
    }

    @PostMapping("/getPosts")
    public List<PostVO> GetPosts() {
        return postDAO.getPosts();
    }

    @PostMapping("/addPost")
    public List<PostVO> AddPost(@RequestBody Map<String, String> req) {
        PostVO postVO = new PostVO();
        postVO.setTitle(req.get("title"));
        postVO.setLore(req.get("lore"));
        postVO.setId(req.get("id"));
        postDAO.addPost(postVO);
        return postDAO.getPosts();
    }

    @PostMapping("/delPost")
    public List<PostVO> DelPost(@RequestBody Map<String, Integer> req) {
        PostVO postVO = new PostVO();
        postVO.setP_id(req.get("p_id"));
        postDAO.delPost(postVO);
        return postDAO.getPosts();
    }

    @PostMapping("/getVotes")
    public List<VoteVO> GetVote(@RequestBody Map<String, String> req) {
        VoteVO voteVO = new VoteVO();
        voteVO.setV_name(req.get("id"));
        return voteDAO.getVotes(voteVO);
    }

    @PostMapping("/delVote")
    public List<VoteVO> DelVote(@RequestBody Map<String, String> req) {
        VoteVO voteVO = new VoteVO();
        voteVO.setV_name(req.get("id"));
        voteDAO.delVote(voteVO);
        voteVO.setV_name(" ");
        return voteDAO.getVotes(voteVO);
    }

    @PostMapping("/addVote")
    public List<VoteVO> AddVote(@RequestBody Map<String, Object> req) {
        VoteVO voteVO = new VoteVO();
        voteVO.setV_name(req.get("id").toString());
        voteDAO.delVote(voteVO);
        voteVO.setNum((int) req.get("vote"));
        voteDAO.addVote(voteVO);
        return voteDAO.getVotes(voteVO);
    }

    @PostMapping("/getScores")
    public List<ScoreVO> GetScores() {
        return scoreDAO.getScores();
    }

    @PostMapping("/addScore")
    public List<ScoreVO> AddScore(@RequestBody Map<String, Integer> req) {
        ScoreVO scoreVO = new ScoreVO();
        scoreVO.setId(req.get("id"));
        scoreVO.setScore(req.get("score"));
        scoreDAO.addScore(scoreVO);
        return scoreDAO.getScores();
    }

    @PostMapping("/boardMatching")
    public String BoardMatching(@RequestBody Map<String, String> req) {
        BoardVO boardVO = new BoardVO();
        boardVO.setB_id("matching");
        boardVO = boardDAO.getBoard(boardVO);
        String enemy = boardVO.getGame();
        boardVO.setGame(req.get("id"));
        if (boardVO.getTurn() == 0) {
            boardVO.setTurn(1);
            boardDAO.setBoard(boardVO);
            return "{\"matching\":\"false\"}";
        }
        else {
            boardVO.setTurn(0);
            boardDAO.setBoard(boardVO);
            return "{\"matching\":\"" + enemy + "\",\"turn\":2}";
        }
    }

    @PostMapping("/findMatching")
    public String FindMatching() {
        BoardVO boardVO = new BoardVO();
        boardVO.setB_id("matching");
        boardVO = boardDAO.getBoard(boardVO);
        if (boardVO.getTurn() == 0) {
            return "{\"matching\":\"" + boardVO.getGame() + "\",\"turn\":1}";
        }
        else {
            return "{\"matching\":\"false\"}";
        }
    }

    @PostMapping("/getBoard")
    public BoardVO GetBoard(@RequestBody Map<String, String> req) {
        BoardVO boardVO = new BoardVO();
        boardVO.setB_id(req.get("id"));
        return boardDAO.getBoard(boardVO);
    }

    @PostMapping("/setBoard")
    public void SetBoard(@RequestBody Map<String, String> req) {
        BoardVO boardVO = new BoardVO(req.get("id"), req.get("board"), Integer.parseInt(req.get("turn")));
        boardDAO.setBoard(boardVO);
    }

    @PostMapping("/resetBoard")
    public void ResetBoard(@RequestBody Map<String, String> req) {
        BoardVO boardVO = new BoardVO(req.get("id"), req.get("board"), 2);
        boardDAO.resetBoard(boardVO);
    }

    @PostMapping("/getCanvases")
    public List<CanvasVO> GetCanvases(@RequestBody Map<String, Integer> req) {
        CanvasVO canvasVO = new CanvasVO();
        canvasVO.setId(req.get("id"));
        return canvasDAO.getCanvases(canvasVO);
    }

    @PostMapping("/addCanvas")
    public void AddCanvas(@RequestBody Map<String, Object> req) {
        CanvasVO canvasVO = new CanvasVO((int) req.get("f_x"), (int) req.get("f_y"),
                (int) req.get("l_x"), (int) req.get("l_y"), req.get("color").toString());
        canvasDAO.addCanvas(canvasVO);
    }
}