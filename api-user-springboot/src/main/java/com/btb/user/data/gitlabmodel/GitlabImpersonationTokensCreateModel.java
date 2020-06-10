package com.btb.user.data.gitlabmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
public class GitlabImpersonationTokensCreateModel {
    private String name;
    private List<String> scopes = new ArrayList<>();
    public GitlabImpersonationTokensCreateModel () {
        this.name = "For btb service";

        this.scopes.add("api");
        this.scopes.add("read_user");
        this.scopes.add("read_api");
        this.scopes.add("read_repository");
        this.scopes.add("write_repository");
        this.scopes.add("sudo");
    }
}
