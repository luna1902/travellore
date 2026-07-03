package com.example.fp.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth->auth.requestMatchers(
                        "/api/register"
                                ,"/api/login"
                                ,"api/destination/**"
                                ,"/api/trips/**"
                                ).permitAll()
                        .anyRequest().authenticated()
                );
        return http.build();
    }
@Bean                 //tells spring to create one passwordEncoder object when app starts and manage it for me
//Inversion of control (IoC Container)
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}}