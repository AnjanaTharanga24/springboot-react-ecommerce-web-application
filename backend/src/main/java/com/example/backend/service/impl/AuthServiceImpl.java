package com.example.backend.service.impl;

import com.example.backend.controller.request.UserRegisterRequest;
import com.example.backend.controller.response.UserRegisterResponse;
import com.example.backend.exception.AlreadyExistException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.AuthService;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService , UserDetailsService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    @Override
    public UserRegisterResponse userRegistration(UserRegisterRequest userRegisterRequest) throws AlreadyExistException,NotFoundException {
        Optional<User> user = userRepository.findByUsername(userRegisterRequest.getUsername());

        if (user.isPresent()){
            throw new AlreadyExistException("user name already exists with " + userRegisterRequest.getUsername());
        }

        User newUser = new User();
        newUser.setName(userRegisterRequest.getName());
        newUser.setUsername(userRegisterRequest.getUsername());
        newUser.setDob(userRegisterRequest.getDob());
        newUser.setGender(userRegisterRequest.getGender());

        Role role = roleRepository.findByName(userRegisterRequest.getRole())
                .orElseThrow(()->new NotFoundException("roles not found in the database"));

        newUser.getRoles().add(role);
        newUser.setRole(role.getName());
        newUser.setNumber(userRegisterRequest.getNumber());
        newUser.setEmail(userRegisterRequest.getEmail());
        newUser.setPassword(passwordEncoder.encode(userRegisterRequest.getPassword()));

         User registeredUser = userRepository.save(newUser);


        return UserRegisterResponse.builder()
                .name(registeredUser.getName())
                .username(registeredUser.getUsername())
                .dob(registeredUser.getDob())
                .gender(registeredUser.getGender())
                .roles(role.getName())
                .number(registeredUser.getNumber())
                .email(registeredUser.getEmail())
                .password(registeredUser.getPassword())
                .build();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       User user = userRepository.findByUsername(username)
               .orElseThrow(()->new UsernameNotFoundException("username not found with : " + username));
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                user.getRoles().stream()
                        .map(role -> new SimpleGrantedAuthority(role.getName()))
                        .collect(Collectors.toList())
        );


    }
}
