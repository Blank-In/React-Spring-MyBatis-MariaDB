package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import com.example.spring_test.myBatis.VO.CanvasVO;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class CanvasDAO {
    public List<CanvasVO> getCanvases(CanvasVO vo) {
        List<CanvasVO> list = new ArrayList<>();
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            list = mybatis.selectList("CanvasDAO.getCanvases", vo);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public void addCanvas(CanvasVO vo) {
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            mybatis.insert("CanvasDAO.addCanvas", vo);
            mybatis.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
