package com.sph.apiqubank.client;

import com.sph.apiqubank.entity.feignmodel.GitlabForkRequestModel;
import com.sph.apiqubank.entity.feignmodel.GitlabForkResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value="gitlab", url="http://gitlab.ppojin.com/api/v4")
public interface GitlabClient {
    @PostMapping("projects/{projectId}/fork")
    GitlabForkResponseModel forkQuestion(
            @RequestBody GitlabForkRequestModel gitlabForkRequestModel,
            @PathVariable(value = "projectId") Integer projectId,
            @RequestParam("access_token") String token
    );
}
