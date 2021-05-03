package com.example.spring_test.VO;

public class PostVO {
    private int p_id;
    private String title;
    private String lore;
    private String id;
    private String u_lore;

    public String getU_lore() {
        return u_lore;
    }

    public void setU_lore(String u_lore) {
        this.u_lore = u_lore;
    }

    public int getP_id() {
        return p_id;
    }

    public void setP_id(int p_id) {
        this.p_id = p_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLore() {
        return lore;
    }

    public void setLore(String lore) {
        this.lore = lore;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
