package com.kkn.dto;

public class JWTResponse {
    private String token;

    public String getToken() {
        return token;
    }

    public JWTResponse(String token) {
        this.token = token;
    }
}
