package com.btb.user.service;

import com.btb.user.client.GitlabClient;
import com.btb.user.data.UserDto;
import com.btb.user.data.gitlabmodel.GitlabImpersonationTokensCreateModel;
import com.btb.user.data.gitlabmodel.GitlabImpersonationTokensResponseModel;
import com.btb.user.data.gitlabmodel.GitlabUserCreateModel;
import com.btb.user.data.gitlabmodel.GitlabUserResponseModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

@Service
public class GitlabServiceImpl implements GitlabService{
    GitlabClient gitlabClient;
    Environment env;

    @Autowired
    public GitlabServiceImpl(GitlabClient gitlabClient, Environment env) {
        this.gitlabClient = gitlabClient;
        this.env = env;
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        GitlabUserCreateModel gitlabUserCreateModel = new GitlabUserCreateModel();
        gitlabUserCreateModel.setEmail(userDto.getEmail());
        gitlabUserCreateModel.setName(userDto.getName());
        gitlabUserCreateModel.setPassword(userDto.getPassword());
        gitlabUserCreateModel.setUsername(userDto.getName());
        String token = env.getProperty("gitlab.auth.token");
        GitlabUserResponseModel gitlabUserResponseModel = gitlabClient.userCreate(gitlabUserCreateModel, token);
        userDto.setGitlabUserId(gitlabUserResponseModel.getId());
        return userDto;
    }

    @Override
    public UserDto createToken(UserDto userDto) {
        GitlabImpersonationTokensCreateModel gitlabImpersonationTokensCreateModel = new GitlabImpersonationTokensCreateModel();
        GitlabImpersonationTokensResponseModel gitlabImpersonationTokensResponseModel = gitlabClient.tokenCreate(
                gitlabImpersonationTokensCreateModel,
                userDto.getGitlabUserId(),
                env.getProperty("gitlab.auth.token")
        );
        userDto.setGitlabToken(gitlabImpersonationTokensResponseModel.getToken());
        return userDto;
    }
}
