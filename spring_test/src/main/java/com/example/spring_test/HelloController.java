package com.example.spring_test;

import com.example.spring_test.DAO.PostDAO;
import com.example.spring_test.DAO.UserDAO;
import com.example.spring_test.DAO.VoteDAO;
import com.example.spring_test.VO.PostVO;
import com.example.spring_test.VO.UserVO;
import com.example.spring_test.VO.VoteVO;
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

    @PostMapping("/test")
    public String test(HttpServletRequest request) {
        String value = "";
        value += request.getRemoteAddr() + " | ";
        value += request.getRequestURI() + " | ";
        value += request.getMethod();
        System.out.println(value);
        return value;
    }

    @PostMapping("/login")
    public String Login(@RequestBody Map<String, String> req) {
        UserVO userVO = new UserVO();
        userVO.setId(req.get("id"));
        userVO.setPw(req.get("pw"));
        userVO = userDAO.loginUser(userVO);
        if (userVO == null) {
            return "{\"flg\":false, \"lore\":\"아이디 또는 비밀번호가 틀렸습니다.\"}";
        }
        else {
            return "{\"flg\":true, \"lore\":\"" + userVO.getLore() + "\"}";
        }
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
    public List<PostVO> GetPosts(){
        return postDAO.getPosts();
    }

    @PostMapping("/addPost")
    public List<PostVO> AddPost(@RequestBody Map<String, String> req){
        PostVO postVO=new PostVO();
        postVO.setTitle(req.get("title"));
        postVO.setLore(req.get("lore"));
        postVO.setId(req.get("id"));
        postDAO.addPost(postVO);
        return postDAO.getPosts();
    }

    @PostMapping("/delPost")
    public List<PostVO> DelPost(@RequestBody Map<String, Integer> req){
        PostVO postVO=new PostVO();
        postVO.setP_id(req.get("p_id"));
        postDAO.delPost(postVO);
        return postDAO.getPosts();
    }

    @PostMapping("/getVotes")
    public List<VoteVO> GetVote(@RequestBody Map<String, String> req){
        VoteVO voteVO=new VoteVO();
        voteVO.setId(req.get("id"));
        return voteDAO.getVotes(voteVO);
    }

    @PostMapping("/delVote")
    public List<VoteVO> DelVote(@RequestBody Map<String, String> req){
        VoteVO voteVO=new VoteVO();
        voteVO.setId(req.get("id"));
        voteDAO.delVote(voteVO);
        voteVO.setId(null);
        return voteDAO.getVotes(voteVO);
    }

    @PostMapping("/addVote")
    public List<VoteVO> AddVote(@RequestBody Map<String, String> req){
        VoteVO voteVO=new VoteVO();
        voteVO.setId(req.get("id"));
        voteDAO.delVote(voteVO);
        voteVO.setVote(Integer.parseInt(req.get("vote")));
        voteDAO.addVote(voteVO);
        voteVO.setId(null);
        return voteDAO.getVotes(voteVO);
    }
}
