package com.example.spring_test.DAO;

import com.example.spring_test.VO.UserVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

public class UserDAO {
    private SqlSession mybatis;

    public UserDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public UserVO loginUser(UserVO vo) {
        return (mybatis.selectOne("UserDAO.loginUser", vo));
    }

    public void registerUser(UserVO vo) {
        mybatis.insert("UserDAO.registerUser", vo);
        mybatis.commit();
    }
}
