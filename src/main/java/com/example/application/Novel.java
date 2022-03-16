package com.example.application;

import javax.validation.constraints.NotBlank;

public class Novel {

    @NotBlank 
    private String title;

    @NotBlank
    private String author;

    public Novel(String title, String author){
      this.title = title;
      this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
