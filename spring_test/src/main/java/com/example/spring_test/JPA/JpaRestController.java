package com.example.spring_test.JPA;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/memberTest")
public class JpaRestController {

    @Autowired
    MemberService memberService;

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<MemberVO>> getAllMembers() {
        List<MemberVO> member = memberService.findAll();
        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    @PostMapping("/login")
    public String Login(@RequestBody Map<String, String> req) {
        Optional<MemberVO> member = memberService.findById(req.get("id"));
        if (member.isPresent()) {
            if (member.get().getPw().equals(req.get("pw"))) {
                return "{\"flg\":true, \"lore\":\"" + member.get().getLore() + "\"}";
            }
            else {
                return "{\"flg\":false, \"lore\":\"비밀번호가 틀렸습니다.\"}";
            }
        }
        else {
            return "{\"flg\":false, \"lore\":\"존재하지 않는 계정입니다.\"}";
        }
    }

    @GetMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<MemberVO> getMember(@PathVariable("id") String id) {
        Optional<MemberVO> member = memberService.findById(id);
        if(member.isPresent()){
            return new ResponseEntity<>(member.get(), HttpStatus.OK);
        }
        return null;
    }

    @DeleteMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Void> deleteMember(@PathVariable("id") String id) {
        memberService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<MemberVO> updateMember(@PathVariable("id") String id, MemberVO member) {
        memberService.updateById(id, member);
        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<MemberVO> save(MemberVO member) {
        return new ResponseEntity<>(memberService.save(member), HttpStatus.OK);
    }
}
