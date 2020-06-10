package com.btb.user.service;

import com.btb.user.data.UserDto;
import com.btb.user.data.gitlabmodel.GitlabImpersonationTokensCreateModel;
import com.btb.user.data.gitlabmodel.GitlabImpersonationTokensResponseModel;
import com.btb.user.data.gitlabmodel.GitlabUserCreateModel;
import com.btb.user.data.gitlabmodel.GitlabUserResponseModel;

public interface GitlabService {
    UserDto createUser (UserDto userDto);
    UserDto createToken (UserDto userDto);
    // runtime ---- ("nodepatd.");
}
