package com.example.spring_test.myBatis.VO;

public class ScoreVO {
    private int id;
    private String lore;
    private double score;
    private int cnt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLore() {
        return lore;
    }

    public void setLore(String lore) {
        this.lore = lore;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public int getCnt() {
        return cnt;
    }

    public int plusCnt() {
        ++cnt;
        return cnt;
    }
}
