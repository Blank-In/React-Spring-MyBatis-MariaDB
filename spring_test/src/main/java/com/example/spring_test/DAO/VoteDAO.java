package com.example.spring_test.DAO;

import com.example.spring_test.VO.VoteVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class VoteDAO {
    private SqlSession mybatis;

    public VoteDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public List<VoteVO> getVotes(VoteVO vo){
        return mybatis.selectList("VoteDAO.getVotes",vo);
    }

    public void delVote(VoteVO vo){
        mybatis.delete("VoteDAO.delVote",vo);
        mybatis.commit();
    }

    public void addVote(VoteVO vo){
        mybatis.insert("VoteDAO.addVote",vo);
        mybatis.commit();
    }
}
