package com.example.backend.controller;

import com.example.backend.controller.request.UserRegisterRequest;
import com.example.backend.controller.response.UserRegisterResponse;
import com.example.backend.exception.AlreadyExistException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthController {

    private AuthService authService;
    @PostMapping("/register")
    public UserRegisterResponse userRegistration(@RequestBody UserRegisterRequest userRegisterRequest) throws AlreadyExistException, NotFoundException {
        return authService.userRegistration(userRegisterRequest);
    }
}
