package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.VO.PostVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class PostDAO {
    public List<PostVO> getPosts() {
        List<PostVO> list = new ArrayList<>();
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            list = mybatis.selectList("PostDAO.getPosts");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public void addPost(PostVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.insert("PostDAO.addPost", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void delPost(PostVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.delete("PostDAO.delPost", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
