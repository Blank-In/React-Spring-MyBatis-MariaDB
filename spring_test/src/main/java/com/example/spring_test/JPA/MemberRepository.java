package com.example.spring_test.JPA;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<MemberVO, Long> {

    public List<MemberVO> findById(String id);

    public List<MemberVO> findByPw(String pw);

    public List<MemberVO> findByIdLike(String keyword);

}
