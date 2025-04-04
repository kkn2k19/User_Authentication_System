package com.kkn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kkn.model.User;
import com.kkn.service.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestBody User users) {
        return service.register(users);
    }

    @PostMapping("/login")
    public String login(@RequestBody User users) {
        return service.verify(users);
    }
}
