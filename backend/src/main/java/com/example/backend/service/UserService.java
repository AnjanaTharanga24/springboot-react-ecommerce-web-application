package com.example.backend.service;

import com.example.backend.exception.NotFoundException;
import com.example.backend.model.User;

public interface UserService {

    User findByUserName(String username) throws NotFoundException;
}
