package com.btb.user.client;

import com.btb.user.data.gitlabmodel.GitlabImpersonationTokensCreateModel;
import com.btb.user.data.gitlabmodel.GitlabImpersonationTokensResponseModel;
import com.btb.user.data.gitlabmodel.GitlabUserCreateModel;
import com.btb.user.data.gitlabmodel.GitlabUserResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@FeignClient(value="gitlab", url="http://gitlab.ppojin.com/api/v4")
public interface GitlabClient {
    @PostMapping("/users")
    GitlabUserResponseModel userCreate(
            @RequestBody GitlabUserCreateModel gitlabUserCreateModel,
            @RequestParam("access_token") String token
    );
    @PostMapping("users/{gitlabUserId}/impersonation_tokens")
    GitlabImpersonationTokensResponseModel tokenCreate(
            @RequestBody GitlabImpersonationTokensCreateModel gitlabImpersonationTokensCreateModel,
            @PathVariable(value = "gitlabUserId") Integer gitlabUserId,
            @RequestParam("access_token") String token
    );
}
