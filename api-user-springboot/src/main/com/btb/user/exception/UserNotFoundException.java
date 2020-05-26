package com.btb.user.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String userId) {
        super(userId);
    }
}
