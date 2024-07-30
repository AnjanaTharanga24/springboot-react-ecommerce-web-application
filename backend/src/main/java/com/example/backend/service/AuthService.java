package com.example.backend.service;

import com.example.backend.controller.request.UserRegisterRequest;
import com.example.backend.controller.response.UserRegisterResponse;
import com.example.backend.exception.AlreadyExistException;
import com.example.backend.exception.NotFoundException;

public interface AuthService {

    UserRegisterResponse userRegistration(UserRegisterRequest userRegisterRequest) throws AlreadyExistException , NotFoundException;
}
