package com.sph.apiexam.entity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionExamResponseModel {
    private String questionPK;
    private String title;
    private String contents;

    private Map<Long, String> categoryJson;
    private List<String> testMethod;
}
