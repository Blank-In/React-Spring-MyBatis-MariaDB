package com.example.spring_test;

import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import com.example.spring_test.VO.userVO;
import org.apache.ibatis.session.SqlSession;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:/web/WEB-INF/applicationContext.xml"})
@RestController
@RequestMapping("/api")
public class HelloController {


    @PostMapping("/test")
    public String test(HttpServletRequest request) {
        String value = "";
        value += request.getRemoteAddr() + " | ";
        value += request.getRequestURI() + " | ";
        value += request.getMethod();
        System.out.println(value);
        /*
        try{
            Connection con=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/test_db","blank","");
            PreparedStatement ps= con.prepareStatement("select * from test_user");
            ResultSet rs= ps.executeQuery();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        */
        try {
            SqlSession sqlSession = SqlSessionFactoryBean.getSqlSessionInstance();
            List<userVO> list = sqlSession.selectList("UserDAO.allUser");
            for (userVO user : list) {
                System.out.println(user.getId());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return value;
    }
}
