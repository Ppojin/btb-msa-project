package com.btb.apiresult.client;

import com.btb.apiresult.data.feignmodel.UserResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "api-user")
public interface CustomerClient {
    @GetMapping(value = "/v1/users/{customerPk}", produces = {MediaType.APPLICATION_JSON_VALUE})
    ResponseEntity<UserResponseModel> getUser(@PathVariable("customerPk") String customerPk);
    @GetMapping(value = "/v1/users/{customerPk}/token", produces = {MediaType.APPLICATION_JSON_VALUE})
    ResponseEntity<String> getToken(@PathVariable("customerPk") String customerPk);
}
