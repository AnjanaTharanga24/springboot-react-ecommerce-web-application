package com.example.backend.service.impl;

import com.example.backend.controller.request.UserUpdateRequest;
import com.example.backend.controller.response.UserResponse;
import com.example.backend.controller.response.UserUpdateResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    @Override
    public User findByUserName(String username) throws NotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(()-> new NotFoundException("user not found with username " + username));
        return user;
    }

    @Override
    public UserUpdateResponse updateUser(Long userId , UserUpdateRequest userUpdateRequest) throws NotFoundException{
        Optional<User> userOptional = userRepository.findById(userId);

        if (!userOptional.isPresent()){
            throw new NotFoundException("user not found with id : " + userId);
        }

        User user = userOptional.get();

        user.setName(userUpdateRequest.getName());
        user.setUsername(userUpdateRequest.getUsername());
        user.setDob(userUpdateRequest.getDob());
        user.setGender(userUpdateRequest.getGender());
        user.setRole(userUpdateRequest.getRole());
        user.setNumber(userUpdateRequest.getNumber());
        user.setEmail(userUpdateRequest.getEmail());


        User updatedUser = userRepository.save(user);
        return UserUpdateResponse.builder()
                .name(updatedUser.getName())
                .username(updatedUser.getUsername())
                .dob(updatedUser.getDob())
                .gender(updatedUser.getGender())
                .role(updatedUser.getRole())
                .number(updatedUser.getNumber())
                .email(updatedUser.getEmail())
                .build();
    }
}
