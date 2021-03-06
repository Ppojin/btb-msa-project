package com.sph.apiqubank.entity.feignmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResultResponseModel {
    private String questionResultPK;
    private String questionPK;
    private String groupName;
    private String customerPK;
    private String createDate;
    private String gitUrl;
    private List<TestCaseResultResponseModel> testCaseResultResponseList;
}
