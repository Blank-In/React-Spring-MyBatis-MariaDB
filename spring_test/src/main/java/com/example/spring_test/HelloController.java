package com.example.spring_test;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class HelloController {

    @PostMapping("/ip")
    public ResponseEntity<String> ip (HttpServletRequest request){
        ResponseEntity<String> value=ResponseEntity.ok(request.getRemoteAddr());
        return value;
    }
    @PostMapping("/test")
    public String test(HttpServletRequest request){
        String value="";
        value+=request.getRemoteAddr()+" | ";
        value+=request.getRequestURI()+" | ";
        value+=request.getMethod();
        return value;
    }
}
