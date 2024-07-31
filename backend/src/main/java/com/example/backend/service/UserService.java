package com.example.backend.service;

import com.example.backend.controller.request.UserUpdateRequest;
import com.example.backend.controller.response.UserResponse;
import com.example.backend.controller.response.UserUpdateResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.User;

public interface UserService {

    User findByUserName(String username) throws NotFoundException;
    UserUpdateResponse updateUser(Long userId , UserUpdateRequest userUpdateRequest) throws NotFoundException;
}
