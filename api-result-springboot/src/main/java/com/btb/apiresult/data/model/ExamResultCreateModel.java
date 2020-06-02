package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor @AllArgsConstructor
public class ExamResultCreateModel {
    private String examPK;
    private String groupName;
    private String customerPK;
    private List<TestCaseResultCreateModel> testCaseResultCreateList;
}
