package com.btb.user.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateModel {
    @Email(message = "Must be insert Email format.")
    private String email;
    @Size(min = 2, max = 12, message = "length must be 2~12")
    private String name;
    @Size(min = 8, max = 16, message = "length must be 8~16")
    private String password;
    @Size(min = 4, max = 16, message = "length must be 4~16")
    private String groupName;

    @DecimalMax(value = "3", message = "value must be 1 or 2 or 3")
    @DecimalMin(value = "1", message = "value must be 1 or 2 or 3")
    private Integer gender;
    private String phone;
    private String city;
}