package com.btb.user.service;

import com.btb.user.data.UserDto;
import com.btb.user.data.UserEntity;
import com.btb.user.data.UserRepository;
import com.btb.user.data.model.UserResponseModel;
import com.btb.user.exception.UserNotFoundException;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService{
    private UserRepository repository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private Environment env;

    @Autowired
    public UserServiceImpl(UserRepository repository, BCryptPasswordEncoder bCryptPasswordEncoder, Environment env) {
        this.repository = repository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.env = env;
    }

    @Override
    public UserDto createUser(UserDto userDetails) {
        userDetails.setCustomerPK(UUID.randomUUID().toString());
        userDetails.setEncryptedPassword(bCryptPasswordEncoder.encode(userDetails.getPassword()));
        ModelMapper modelMapper = new ModelMapper();
        UserEntity userEntity = modelMapper.map(userDetails, UserEntity.class);
        repository.save(userEntity);
        UserDto result = modelMapper.map(userEntity, UserDto.class);
        return result;
    }

    @Override
    public UserDto getUSerDetailsByEmail(String email) {
        UserEntity userEntity = repository.findByEmail(email);
        if(userEntity == null) throw new UserNotFoundException(email);
        UserDto userDto = new ModelMapper().map(userEntity, UserDto.class);
        return userDto;
    }

    @Override
    public UserDto getUserByCustomerPK(String customerKey) {
        UserEntity userEntity = repository.findByCustomerPK(customerKey);
        if(userEntity == null) throw new UserNotFoundException(customerKey);
        UserDto userDto = new ModelMapper().map(userEntity, UserDto.class);
        return userDto;
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UserNotFoundException {
        UserEntity userEntity = repository.findByEmail(email);
        if(userEntity == null) throw new UserNotFoundException(email);
        return new User(
                userEntity.getEmail(),
                userEntity.getEncryptedPassword(),
                true,
                true,
                true,
                true,
                new ArrayList<>()
        );
    }

    @Override
    public UserDto confirmUser(String email, String password) throws UserNotFoundException {
        ModelMapper modelMapper = new ModelMapper();
        UserEntity userEntity = repository.findByEmail(email);
        if(bCryptPasswordEncoder.matches(password, userEntity.getEncryptedPassword())){
            return modelMapper.map(userEntity, UserDto.class);
        } else {
            return null;
        }
    }

    @Override
    public List<UserDto> listAll() {
        Type userDtoListType = new TypeToken<List<UserDto>>(){}.getType();
        return new ModelMapper().map(repository.listAll(), userDtoListType);
    }
}
