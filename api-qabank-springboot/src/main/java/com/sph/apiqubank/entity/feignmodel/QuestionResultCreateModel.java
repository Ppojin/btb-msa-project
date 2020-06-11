package com.sph.apiqubank.entity.feignmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor @AllArgsConstructor
public class QuestionResultCreateModel {
    private String questionPK;
    private String groupName;
    private String customerPK;
    private String gitUrl;
    private List<TestCaseResultCreateModel> testCaseResultCreateList;
}
