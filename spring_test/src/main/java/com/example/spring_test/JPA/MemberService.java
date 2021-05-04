package com.example.spring_test.JPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    //find select
    //save insert-update
    //delete delete

    @Autowired
    private MemberRepository memberRepository;

    public List<MemberVO> findAll() {
        List<MemberVO> members = new ArrayList<>();
        memberRepository.findAll().forEach(e -> members.add(e));
        return members;
    }

    public Optional<MemberVO> findById(String id) {
        Optional<MemberVO> member = memberRepository.findById(id);
        return member;
    }

    public void deleteById(String id) {
        memberRepository.deleteById(id);
    }

    public MemberVO save(MemberVO member) {
        memberRepository.save(member);
        return member;
    }

    public void updateById(String id, MemberVO member) {
        Optional<MemberVO> e = memberRepository.findById(id);
        if (e.isPresent()) {
            e.get().setId(member.getId());
            e.get().setPw(member.getPw());
            e.get().setLore(member.getLore());
            memberRepository.save(member);
        }
    }

}
