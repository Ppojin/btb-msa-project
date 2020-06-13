package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionResultCreateModel {
    private String questionResultPK;
    private String questionPK;
    private String groupName;
    private String customerPK;
    private String gitUrl;
    private String done;
    private List<TestCaseResultCreateModel> testCaseResultCreateList;
}
