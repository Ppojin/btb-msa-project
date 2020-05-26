package com.btb.backeureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class BackEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEurekaApplication.class, args);
    }

}
