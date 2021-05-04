package com.example.spring_test.JPA;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "test_user")
public class MemberVO {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY) 유니크키 자동생성
    private String id;

    private String pw;

    private String lore;

    @Builder
    public MemberVO(String id, String pw) {
        this.id = id;
        this.pw = pw;
    }
}
