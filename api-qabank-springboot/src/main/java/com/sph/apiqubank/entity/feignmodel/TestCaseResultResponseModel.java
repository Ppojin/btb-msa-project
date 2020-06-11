package com.sph.apiqubank.entity.feignmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestCaseResultResponseModel {
    private String testCasePK;
    private String questionPK;
    private String testCaseMethod;
    private Boolean earned;
}
