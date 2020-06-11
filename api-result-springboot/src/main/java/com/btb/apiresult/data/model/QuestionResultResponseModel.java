package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
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
