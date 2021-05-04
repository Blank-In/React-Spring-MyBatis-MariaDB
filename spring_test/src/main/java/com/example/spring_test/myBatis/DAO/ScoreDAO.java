package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.VO.ScoreVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class ScoreDAO {
    private SqlSession mybatis;

    public ScoreDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public List<ScoreVO> getScores() {
        return mybatis.selectList("ScoreDAO.getScores");
    }

    public void addScore(ScoreVO vo) {
        ScoreVO origin = mybatis.selectOne("ScoreDAO.getScore", vo);
        origin.setScore((origin.getScore() * origin.getCnt() + vo.getScore()) / origin.plusCnt());
        mybatis.update("addScore", origin);
        mybatis.commit();
    }
}