package com.example.backend.controller;

import com.example.backend.controller.request.UserUpdateRequest;
import com.example.backend.controller.response.UserUpdateResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
public class UserController{

    private UserService userService;
    @GetMapping("/users")
    public User findByUsername(@Param("username") String username) throws NotFoundException {
        return userService.findByUserName(username);
    }

    @PutMapping("/users/{user_id}")
    public UserUpdateResponse updateUserById(@PathVariable("user_id") Long userId ,@RequestBody UserUpdateRequest userUpdateRequest) throws NotFoundException{
        return userService.updateUser(userId,userUpdateRequest);
    }
}
