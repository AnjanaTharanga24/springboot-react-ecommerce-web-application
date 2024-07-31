package com.example.backend.controller.response;

import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserUpdateResponse {

    private String name;
    private String username;
    private LocalDate dob;
    private Gender gender;
    private String role;
    private String number;
    private String email;

}
