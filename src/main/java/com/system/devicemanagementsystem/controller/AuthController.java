package com.system.devicemanagementsystem.controller;

import org.springframework.web.bind.annotation.*;
import com.system.devicemanagementsystem.model.User;
import com.system.devicemanagementsystem.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User foundUser = userRepository.findByUsername(user.getUsername());

        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return "SUCCESS";
        } else {
            return "INVALID";
        }
    }

}
