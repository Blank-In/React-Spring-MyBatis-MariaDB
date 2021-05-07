package com.example.spring_test.myBatis.DAO;

import com.example.spring_test.myBatis.SqlSessionFactoryBean;
import com.example.spring_test.myBatis.VO.NoticeVO;
import org.apache.ibatis.session.SqlSession;

import java.util.ArrayList;
import java.util.List;

public class NoticeDAO {

    public List<NoticeVO> getNotices() {
        List<NoticeVO> list = new ArrayList<>();
        try (SqlSession mybatis = SqlSessionFactoryBean.getSqlSessionInstance()) {
            list = mybatis.selectList("NoticeDAO.getNotices");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

}
