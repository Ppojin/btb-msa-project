package com.btb.user.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String customerPK;
    private String email;
    private String password;
    private String name;
    private String groupName;
    private String signinDate;

    private Integer gender;
    private String phone;
    private String city;

    private String encryptedPassword;
}
