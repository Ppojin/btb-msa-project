package com.sph.apiqubank.entity.feignmodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestCaseResultCreateModel {
    private String questionPK;
    private String questionResultPK;
    private String testCaseMethod;
    private Boolean earned;
}
