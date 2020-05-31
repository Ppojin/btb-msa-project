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
    private String examResultPk;
    private String examPk;
    private String groupName;
    private String customerPk;
    private String createDate;
    private List<TestCaseResultResponseModel> testCaseResultResponseList;
}
