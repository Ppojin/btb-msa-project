package com.sph.apiqubank.client;

import com.sph.apiqubank.entity.Model.UserResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Component
@FeignClient(value = "customer",name="api-user")
public interface CustomerClient {
    @GetMapping(value = "{customerPk}", produces = {MediaType.APPLICATION_JSON_VALUE})
    ResponseEntity<UserResponseModel> getUser(@PathVariable("customerPk") String customerPk);
}
