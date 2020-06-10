package com.btb.user.data.gitlabmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class GitlabUserCreateModel {
    private String email;
    private String name;
    private String username;
    private String password;
    private Boolean skip_confirmation;

    public GitlabUserCreateModel() {
        this.skip_confirmation = true;
    }

    public GitlabUserCreateModel(String email, String name, String username, String password) {
        this.email = email;
        this.name = name;
        this.username = username;
        this.password = password;
        this.skip_confirmation = true;
    }
}
