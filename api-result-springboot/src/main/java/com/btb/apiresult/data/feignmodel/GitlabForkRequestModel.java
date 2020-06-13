package com.btb.apiresult.data.feignmodel;

import lombok.Data;

import java.util.UUID;

@Data
public class GitlabForkRequestModel {
    private String name;
    private String path;
    public GitlabForkRequestModel(){
        String uuid = UUID.randomUUID().toString();
        this.name = uuid;
        this.path = uuid;
    }
    public GitlabForkRequestModel(String uuid){
        this.name = uuid;
        this.path = uuid;
    }
}