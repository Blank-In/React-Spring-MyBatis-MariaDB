package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.VO.VoteVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class VoteDAO {
    public List<VoteVO> getVotes(VoteVO vo) {
        List<VoteVO> list = new ArrayList<>();
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            list = mybatis.selectList("VoteDAO.getVotes", vo);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public void delVote(VoteVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.delete("VoteDAO.delVote", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addVote(VoteVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.insert("VoteDAO.addVote", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
