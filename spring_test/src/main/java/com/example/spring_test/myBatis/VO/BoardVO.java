package com.example.spring_test.myBatis.VO;

public class BoardVO {
    private String b_id;
    private String game;
    private int turn;

    public BoardVO() {
    }

    public BoardVO(String b_id, String game, int turn) {
        this.b_id = b_id;
        this.game = game;
        this.turn = turn;
    }

    public String getB_id() {
        return b_id;
    }

    public void setB_id(String b_id) {
        this.b_id = b_id;
    }

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public int getTurn() {
        return turn;
    }

    public void setTurn(int turn) {
        this.turn = turn;
    }
}