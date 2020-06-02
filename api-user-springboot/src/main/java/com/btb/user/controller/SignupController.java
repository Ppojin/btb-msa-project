package com.btb.user.controller;

import com.btb.user.data.UserDto;
import com.btb.user.data.model.UserCreateModel;
import com.btb.user.data.model.UserCreateResponseModel;
import com.btb.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api(tags = {"2. Signup"})
@RestController
@RequestMapping("/signup")
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
    @PostMapping(
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
        return ResponseEntity.status(HttpStatus.CREATED).body(UserCreateResponseModel);
    }
}
