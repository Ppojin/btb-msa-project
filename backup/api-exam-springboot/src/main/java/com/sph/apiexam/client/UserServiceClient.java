package com.sph.apiexam.client;

import com.sph.apiexam.entity.model.UserResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "api-user")//, fallback = QABankFallback.class)
public interface UserServiceClient {
    @GetMapping("/v1/users/{customerPK}")
    ResponseEntity<UserResponseModel> getUser(@PathVariable("customerPK") String customerPK);
}

//@Component
//class UserFallback implements UserServiceClient{
//    @Override
//    public ResponseEntity<UserResponseModel> getUser(String customerPK) {
//        return null;
//    }
//}
