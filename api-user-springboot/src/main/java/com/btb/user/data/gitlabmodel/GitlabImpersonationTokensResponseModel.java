package com.btb.user.data.gitlabmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GitlabImpersonationTokensResponseModel {
        private Integer id;
        private String name;
        private Boolean revoked;
        private String created_at;
        private List<String> scopes;
        private Boolean active;
        private String expires_at;
        private String token;
        private Boolean impersonation;
}
