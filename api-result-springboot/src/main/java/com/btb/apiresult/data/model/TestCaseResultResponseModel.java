package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestCaseResultResponseModel {
    private String testCasePk;
    private String testCaseMethod;
    private Boolean earned;
}