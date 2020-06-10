package com.btb.user.data.gitlabmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GitlabUserResponseModel {
    private Integer id;
    private String name;
    private String state;
    private String avatar_url;
    private String web_url;
    private String created_at;
    private String bio;
    private String location;
    private String public_email;
    private String skype;
    private String linkedin;
    private String twitter;
    private String website_url;
    private String organization;
    private String job_title;
    private String work_information;
    private String last_sign_in_at;
    private String confirmed_at;
    private String last_activity_on;
    private String email;
    private Integer theme_id;
    private Integer color_scheme_id;
    private String projects_limit;
    private String current_sign_in_at;
    private List identities;
    private Boolean can_create_group;
    private Boolean can_create_project;
    private Boolean two_factor_enabled;
    private Boolean external;
    private Boolean private_profile;
    private Integer shared_runners_minutes_limit;
    private Integer extra_shared_runners_minutes_limit;
    private Boolean is_admin;
    private String note;
}
