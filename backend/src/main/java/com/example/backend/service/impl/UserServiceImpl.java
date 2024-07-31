package com.example.backend.service.impl;

import com.example.backend.exception.NotFoundException;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    @Override
    public User findByUserName(String username) throws NotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(()-> new NotFoundException("user not found with username " + username));
        return user;
    }
}
