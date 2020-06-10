package com.btb.user.controller;

import com.btb.user.data.UserDto;
import com.btb.user.data.model.LoginModel;
import com.btb.user.data.model.UserCreateModel;
import com.btb.user.data.model.UserCreateResponseModel;
import com.btb.user.data.model.UserLoginModel;
import com.btb.user.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.*;

@Api(tags = {"2. Signup"})
@RestController
@RequestMapping("/")
@Slf4j
public class SignupController {
    private Environment env;
    private UserService userService;

    @Autowired
    public SignupController(Environment env, UserService userService) {
        this.env = env;
        this.userService = userService;
    }

    @ApiOperation(value="회원 등록", notes="회원가입 api")
    @PostMapping(value = "/signup",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<UserCreateResponseModel> createUser(
            @RequestBody @Valid UserCreateModel userCreateModel
    ) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserDto userDto = modelMapper.map(userCreateModel, UserDto.class);
        UserDto createdDto = userService.createUser(userDto);
        UserCreateResponseModel UserCreateResponseModel = modelMapper.map(createdDto, UserCreateResponseModel.class);
        if(UserCreateResponseModel.getGroupName() == null) UserCreateResponseModel.setGroupName("default");

        //todo: create git use
        
        //==========================================

        return ResponseEntity.status(HttpStatus.CREATED).body(UserCreateResponseModel);
    }
    @ApiOperation(value="회원 인증", notes="로그인 api")
    @PostMapping(value = "/signin",
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity loginUser(
            @RequestBody @Valid UserLoginModel userLoginModel
            , HttpServletResponse response
    ) {
        UserDto userDto = userService.confirmUser(userLoginModel.getEmail(), userLoginModel.getPassword());
        if(userDto != null){
            Map<String, Object> map = new HashMap<>();
            String token = Jwts.builder()
                    .setSubject(userLoginModel.getEmail())
                    .setHeader(map)
//                .setExpiration(new Date(System.currentTimeMillis() + Long.parseLong(env.getProperty("token.expiration_time"))))
                    .setExpiration(new Date(System.currentTimeMillis() + (3600*1000)))
                    .signWith(SignatureAlgorithm.HS512, env.getProperty("token.secret"))
//                .signWith(SignatureAlgorithm.HS512, "asdf;lkj")
                    .compact();

            MultiValueMap<String, String> header = new LinkedMultiValueMap<>();
            header.add("customerPK", userDto.getCustomerPK());
            header.add("token", token);
            return new ResponseEntity(header, HttpStatus.OK);

//            // use ResponseEntity
//            HttpHeaders httpHeaders = new HttpHeaders();
//            httpHeaders.set("token", token);
//            httpHeaders.set("CustomerPK", userDto.getCustomerPK());
//            return ResponseEntity.status(HttpStatus.OK).headers(httpHeaders).body(null);

//            // use response
//            response.addHeader("token", token);
//            response.addHeader("customerPK", userDto.getCustomerPK());
//            return ResponseEntity.status(HttpStatus.OK).body(null);

//            // useBody
//            Map headerMap = new HashMap();
//            headerMap.put("token", token);
//            headerMap.put("customerPK", userDto.getCustomerPK());
//            return ResponseEntity.status(HttpStatus.OK).body(headerMap);
        } else {
            throw new RuntimeException("Dose not match user and pwd");
        }
    }
}
