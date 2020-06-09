package com.btb.user.service;

import com.btb.user.data.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDetails);
    UserDto getUSerDetailsByEmail(String eamil);
    UserDto getUserByCustomerPK(String userId);
    UserDto confirmUser(String email, String password);

    List<UserDto> listAll();
}

