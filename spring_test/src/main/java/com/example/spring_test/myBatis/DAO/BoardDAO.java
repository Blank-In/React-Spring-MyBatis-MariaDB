package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import com.example.spring_test.myBatis.VO.BoardVO;
import org.apache.ibatis.session.SqlSession;

import javax.transaction.Transactional;

public class BoardDAO {
    public BoardVO getBoard(BoardVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            vo = mybatis.selectOne("BoardDAO.getBoard", vo);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return vo;
    }

    public void setBoard(BoardVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.update("BoardDAO.setBoard", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Transactional
    public void resetBoard(BoardVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.delete("BoardDAO.delBoard", vo);
            mybatis.insert("BoardDAO.addBoard", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
