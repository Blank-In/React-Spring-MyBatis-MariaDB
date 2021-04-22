package com.example.spring_test;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

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
        System.out.println(value);
        try{
            Connection con=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/test_db","blank","");
            PreparedStatement ps= con.prepareStatement("select * from test_user");
            ResultSet rs= ps.executeQuery();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return value;
    }
}
