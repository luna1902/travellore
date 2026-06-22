package com.example.fp.dto;

import com.example.fp.enums.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    //private Long userId;
    private String userName;
    private String password;
    private String email;
    private Role role;
}
