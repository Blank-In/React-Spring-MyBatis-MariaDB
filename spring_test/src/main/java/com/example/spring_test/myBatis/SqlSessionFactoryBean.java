package com.example.spring_test.myBatis;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class SqlSessionFactoryBean {
    //SqlSessionFactoryBuilder - SqlSessionFactory - SqlSession
    //SqlSessionFactory는 애플리케이션을 실행하는 동안 존재해야한다. 삭제하거나 재생성할 필요가 없다.
    private static SqlSessionFactory sessionFactory = null;

    static {
        try {
            Reader reader = Resources.getResourceAsReader("myBatis/mybatis-config.xml");
            //SqlSessionFactoryBuilder는 SqlSessionFactory를 생성한 후 유지할 필요는 없다.
            sessionFactory = new SqlSessionFactoryBuilder().build(reader);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //SqlSession은 매 요청마다 만들고 닫아주는것이 표준적인 형태이다.
    public static SqlSession getSqlSessionInstance() {
        return sessionFactory.openSession();
    }
}
