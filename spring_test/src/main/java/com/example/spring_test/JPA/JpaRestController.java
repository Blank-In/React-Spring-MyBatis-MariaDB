package com.example.spring_test.JPA;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/memberTest")
public class JpaRestController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    MemberService memberService;

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<MemberVO>> getAllmembers() {
        List<MemberVO> member = memberService.findAll();
        return new ResponseEntity<List<MemberVO>>(member, HttpStatus.OK);
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
        return new ResponseEntity<MemberVO>(member.get(), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Void> deleteMember(@PathVariable("id") String id) {
        memberService.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<MemberVO> updateMember(@PathVariable("id") String id, MemberVO member) {
        memberService.updateById(id, member);
        return new ResponseEntity<MemberVO>(member, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<MemberVO> save(MemberVO member) {
        return new ResponseEntity<MemberVO>(memberService.save(member), HttpStatus.OK);
    }

    @RequestMapping(value = "/saveMember", method = RequestMethod.GET)
    public ResponseEntity<MemberVO> save(HttpServletRequest req, MemberVO member) {
        return new ResponseEntity<MemberVO>(memberService.save(member), HttpStatus.OK);
    }

}
