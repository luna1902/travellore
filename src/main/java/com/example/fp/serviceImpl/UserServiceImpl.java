package com.example.fp.serviceImpl;

import com.example.fp.dto.RegisterRequest;
import com.example.fp.entity.User;
import com.example.fp.repository.UserRepository;
import com.example.fp.service.UserService;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public String registerUser(@NonNull RegisterRequest registerRequest){
        User user=new User();
        user.setUserName(registerRequest.getUserName());
        user.setPassword(registerRequest.getPassword());
        user.setEmail(registerRequest.getEmail());
        user.setRole(registerRequest.getRole());
        userRepository.save(user);

        return "User registered successfully";
    }
}
