package com.btb.user.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ControllerAdvice
@RestController
public class ExceptionAdvisor {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map> processValicationError(MethodArgumentNotValidException exception){
        BindingResult bindingResult = exception.getBindingResult();
        List<String> list = new ArrayList<>();
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            list.add(String.format("%s is %s", fieldError.getField(), fieldError.getDefaultMessage()));
        }
        Map<String, List> result = new HashMap<>();
        result.put("messages", list);
        return ResponseEntity.badRequest().body(result);
//        return builder.toString();
    }
}
