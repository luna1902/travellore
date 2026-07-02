package com.example.fp.dto;

import lombok.Data;

@Data
public class LoginResponse {
    private String token;

    public LoginResponse(String message,String token) {
        this.message = message;
        this.token = token;
    }

    private String message;
}
