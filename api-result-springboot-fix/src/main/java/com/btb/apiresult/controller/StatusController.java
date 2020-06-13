package com.btb.apiresult.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class StatusController {
    private Environment env;
    @Autowired
    public StatusController(Environment env) {
        this.env = env;
    }

    @GetMapping("status")
    public String status(){
        return String.format("[api-result] Working on port=%s, secret=%s", env.getProperty("local.server.port"), env.getProperty("token.secret"));
    }
}
