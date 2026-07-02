package com.example.fp.serviceImpl;

import com.example.fp.dto.LoginRequest;
import com.example.fp.dto.LoginResponse;
import com.example.fp.dto.RegisterRequest;
import com.example.fp.entity.User;
import com.example.fp.repository.UserRepository;
import com.example.fp.service.UserService;
import org.jspecify.annotations.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    //using constructor injection instead of autowiriing because its recommended, prevent null pointerException
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String registerUser(@NonNull RegisterRequest registerRequest){

        if(userRepository.existsByEmail(registerRequest.getEmail())){
            return "Email already exists";
        }

        User user=new User();
        user.setUserName(registerRequest.getUserName());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setEmail(registerRequest.getEmail());
        user.setRole(registerRequest.getRole());
        userRepository.save(user);

        return "User registered successfully";
    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional=userRepository.findByEmail(loginRequest.getEmail());
        if(userOptional.isEmpty()) return new LoginResponse(null, "Invalid Email");
        User user=userOptional.get();

        if(!passwordEncoder.matches((user.getPassword()),loginRequest.getPassword())) return new LoginResponse(null, "Invalid Password");

        return new LoginResponse("Login successful","Login successful");}

}
