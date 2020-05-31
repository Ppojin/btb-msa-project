package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestCaseResultCreateModel {
    private String examResultPk;
    private String testCaseMethod;
    private Boolean earned;
}
