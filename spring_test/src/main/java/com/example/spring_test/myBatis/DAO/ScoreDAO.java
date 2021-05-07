package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.VO.ScoreVO;
import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class ScoreDAO {
    public List<ScoreVO> getScores() {
        List<ScoreVO> list = new ArrayList<>();
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            list = mybatis.selectList("ScoreDAO.getScore");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public void addScore(ScoreVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            ScoreVO origin = mybatis.selectOne("ScoreDAO.getScore", vo);
            origin.setScore((origin.getScore() * origin.getCnt() + vo.getScore()) / origin.plusCnt());
            mybatis.update("ScoreDAO.addScore", origin);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}