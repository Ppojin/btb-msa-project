package com.sph.apiqubank.entity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseModel {
    private String questionPK;
    private String title;
    private String contents;
    private String gitUrl;
    private String groupName;

//    private List<String> testMethod;
}
