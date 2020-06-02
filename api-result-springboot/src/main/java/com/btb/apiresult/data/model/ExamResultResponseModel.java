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
public class ExamResultResponseModel {
    private String examResultPK;
    private String examPK;
    private String groupName;
    private String customerPK;
    private String createDate;
    private List<TestCaseResultResponseModel> testCaseResultResponseList;
}
