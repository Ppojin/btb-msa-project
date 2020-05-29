package com.btb.user.controller;

import com.btb.user.data.UserDto;
import com.btb.user.data.model.UserCreateModel;
import com.btb.user.data.model.UserCreateResponseModel;
import com.btb.user.data.model.UserResponseModel;
import com.btb.user.module.JwtParser;
import com.btb.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Enumeration;

@Api(tags = {"1. User"})
@RestController
@RequestMapping("/v1/users")
@Slf4j
public class UserController {
    private Environment env;
    private UserService userService;

    @Autowired
    public UserController(Environment env, UserService userService) {
        this.env = env;
        this.userService = userService;
    }

    @ApiOperation(value = "회원 조회", notes="회원조회 api")
    @GetMapping(
            value = "{customerPK}",
            produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE}
    )
    public ResponseEntity<UserResponseModel> getUser(@PathVariable("customerPK") String customerPK){
        UserDto userDto = userService.getUserByCustomerPK(customerPK);
        UserResponseModel userResponseModel = new ModelMapper().map(userDto, UserResponseModel.class);
        return ResponseEntity.status(HttpStatus.OK).body(userResponseModel);
    }

//    @ApiOperation(value = "계정 확인")

//    @ApiOperation(value = "현재 계정 정보", notes="현재 계정 정보 조회")
//    @GetMapping
//    public ResponseEntity<UserResponseModel> getThisUser(HttpServletRequest request){
//        Enumeration<String> ems = request.getHeaderNames();
//        while (ems.hasMoreElements()) {
//            String name = ems.nextElement();
//            System.out.println(name + "/" + request.getHeader(name));
//        }
//        System.out.println("=========");
//
//        UserDto userDto = userService.getUSerDetailsByEmail(new JwtParser(env).getCurrentUserEmail(request));
//        UserResponseModel userResponseModel = new ModelMapper().map(userDto, UserResponseModel.class);
//        return ResponseEntity.status(HttpStatus.OK).body(userResponseModel);
//    }
}
