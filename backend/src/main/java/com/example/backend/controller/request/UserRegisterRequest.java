package com.example.backend.controller.request;

import com.example.backend.model.Gender;
import com.example.backend.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequest {

    private String name;
    private String username;
    private LocalDate dob;
    private Gender gender;
    private String role;
    private String number;
    private String email;
    private String password;
}
