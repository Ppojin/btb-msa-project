package com.sph.apiqubank.entity.feignmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GitlabForkResponseModel {
    private Integer id;
    private String http_url_to_repo;
}