package com.sph.apiexam.entity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseModel {
    private String customerPK;
    private String name;
    private String groupName;
    private String email;

    private Integer gender;
    private String phone;
    private String city;
}