package com.btb.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class StatusController {
    @Autowired Environment env;

    @CrossOrigin(origins = "*")
    @GetMapping("status")
    public String status(){
        return String.format("[api-user] Working on port=%s, secret=%s", env.getProperty("local.server.port"), env.getProperty("token.secret"));
    }
}
