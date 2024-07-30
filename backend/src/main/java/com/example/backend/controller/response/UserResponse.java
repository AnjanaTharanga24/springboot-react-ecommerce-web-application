package com.example.backend.controller.response;

import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.Set;

@Data
@AllArgsConstructor
@Builder
public class UserResponse {

    private String username;
    private Set<String> roles;

}
