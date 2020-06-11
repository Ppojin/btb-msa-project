package com.sph.apiqubank.entity.feignmodel;

import lombok.Data;

import java.util.UUID;

@Data
public class ForkRequestModel {
    private String name;
    private String path;
    public ForkRequestModel(){
        String uuid = UUID.randomUUID().toString();
        this.name = uuid;
        this.path = uuid;
    }
    public ForkRequestModel(String uuid){
        this.name = uuid;
        this.path = uuid;
    }
}