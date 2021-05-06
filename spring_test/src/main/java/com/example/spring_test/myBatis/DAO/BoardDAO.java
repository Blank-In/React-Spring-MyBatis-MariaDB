package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import com.example.spring_test.myBatis.VO.BoardVO;
import org.apache.ibatis.session.SqlSession;

import javax.transaction.Transactional;

public class BoardDAO {
    private final SqlSession mybatis;

    public BoardDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public BoardVO getBoard(BoardVO vo) {
        return mybatis.selectOne("BoardDAO.getBoard", vo);
    }

    public void setBoard(BoardVO vo) {
        mybatis.update("BoardDAO.setBoard", vo);
        mybatis.commit();
    }

    @Transactional
    public void resetBoard(BoardVO vo) {
        mybatis.delete("BoardDAO.delBoard", vo);
        mybatis.insert("BoardDAO.addBoard", vo);
        mybatis.commit();
    }
}
