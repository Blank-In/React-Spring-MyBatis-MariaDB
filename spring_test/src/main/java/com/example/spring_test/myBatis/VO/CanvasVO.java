package com.example.spring_test.myBatis.VO;

public class CanvasVO {
    private int id;
    private int f_x;
    private int f_y;
    private int l_x;
    private int l_y;
    private String color;

    public CanvasVO() {
    }

    public CanvasVO(int f_x, int f_y, int l_x, int l_y, String color) {
        this.f_x = f_x;
        this.f_y = f_y;
        this.l_x = l_x;
        this.l_y = l_y;
        this.color = color;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getF_x() {
        return f_x;
    }

    public void setF_x(int f_x) {
        this.f_x = f_x;
    }

    public int getF_y() {
        return f_y;
    }

    public void setF_y(int f_y) {
        this.f_y = f_y;
    }

    public int getL_x() {
        return l_x;
    }

    public void setL_x(int l_x) {
        this.l_x = l_x;
    }

    public int getL_y() {
        return l_y;
    }

    public void setL_y(int l_y) {
        this.l_y = l_y;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
