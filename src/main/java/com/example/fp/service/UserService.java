package com.example.fp.service;

import com.example.fp.dto.LoginRequest;
import com.example.fp.dto.LoginResponse;
import com.example.fp.dto.RegisterRequest;

public interface UserService {
    String registerUser(RegisterRequest registerRequest);
    LoginResponse login(LoginRequest loginRequest);
}
