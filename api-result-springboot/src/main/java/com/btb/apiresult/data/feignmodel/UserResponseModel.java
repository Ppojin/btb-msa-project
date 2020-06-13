package com.btb.apiresult.data.feignmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseModel {
    private String customerPk;
    private String name;
    private String groupName;
    private String email;

    private Integer gender;
    private String phone;
    private String city;
}