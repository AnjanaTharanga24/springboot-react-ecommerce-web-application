package com.example.backend.controller.response;

import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRegisterResponse {

    private String name;
    private String username;
    private LocalDate dob;
    private Gender gender;
    private String roles;
    private String number;
    private String email;
    private String password;
}
