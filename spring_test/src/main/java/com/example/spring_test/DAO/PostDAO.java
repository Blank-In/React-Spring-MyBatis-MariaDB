package com.example.spring_test.DAO;

import com.example.spring_test.VO.PostVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class PostDAO {
    private SqlSession mybatis;

    public PostDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public List<PostVO> getPosts() {
        return mybatis.selectList("PostDAO.getPosts");
    }

    public void addPost(PostVO vo) {
        mybatis.insert("PostDAO.addPost", vo);
        mybatis.commit();
    }

    public void delPost(PostVO vo) {
        mybatis.delete("PostDAO.delPost", vo);
        mybatis.commit();
    }
}
