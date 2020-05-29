package com.btb.user.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String userId) {
        super(userId);
    }

    public UserNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
