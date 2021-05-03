package com.example.spring_test.VO;

public class VoteVO {
    private String id;//v_name
    private int vote;//num
    private int cnt;
    private int flg;

    public String getId() {
        return id;
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public int getFlg() {
        return flg;
    }

    public void setFlg(int flg) {
        this.flg = flg;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getVote() {
        return vote;
    }

    public void setVote(int vote) {
        this.vote = vote;
    }
}
