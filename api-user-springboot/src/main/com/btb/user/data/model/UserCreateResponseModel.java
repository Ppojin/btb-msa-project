package com.btb.user.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateResponseModel {
    private String customerPK;
    private String name;
    private String groupName;
    private String email;

    private Integer gender;
    private String phone;
    private String city;
}