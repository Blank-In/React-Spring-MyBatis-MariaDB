package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.VO.UserVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

public class UserDAO {
    public void registerUser(UserVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.insert("UserDAO.registerUser", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
