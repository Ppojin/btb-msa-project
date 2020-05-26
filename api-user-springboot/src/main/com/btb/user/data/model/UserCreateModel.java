package com.btb.user.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateModel {
    @Email
    private String email;
    @Size(min = 2)
    private String name;
    @Size(min = 8)
    private String password;
    @Size(min = 4)
    private String groupName;

    @DecimalMax("2")
    @DecimalMin("1")
    private Integer gender;
    private String phone;
    private String city;
}