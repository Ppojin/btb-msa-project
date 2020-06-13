package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResultResponseModel {
    private String questionResultPK;
    private String questionPK;
    private String groupName;
    private String customerPK;
    private String gitUrl;
    private Date createDate;
    private Integer done;
    private Date doneDate;
    private List<TestCaseResultResponseModel> testCaseResultResponseList;
}
