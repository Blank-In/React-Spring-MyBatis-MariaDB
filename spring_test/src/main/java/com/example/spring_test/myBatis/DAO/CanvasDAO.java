package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import com.example.spring_test.myBatis.VO.CanvasVO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class CanvasDAO {
    private final SqlSession mybatis;

    public CanvasDAO() {
        mybatis = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public List<CanvasVO> getCanvases(CanvasVO vo) {
        return mybatis.selectList("CanvasDAO.getCanvases", vo);
    }

    public void addCanvas(CanvasVO vo) {
        mybatis.insert("CanvasDAO.addCanvas", vo);
        mybatis.commit();
    }
}
