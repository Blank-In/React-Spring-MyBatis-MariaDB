package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.VO.UserVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

public class UserDAO {
    private final SqlSession mybatis;

    public UserDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public void registerUser(UserVO vo) {
        mybatis.insert("UserDAO.registerUser", vo);
        mybatis.commit();
    }
}
