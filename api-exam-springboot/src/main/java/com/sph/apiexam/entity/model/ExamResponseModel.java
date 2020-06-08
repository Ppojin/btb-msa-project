package com.sph.apiexam.entity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamResponseModel {
    private String examPK;
    private String title;
    private String level;
    private Date startDate;
    private Date endDate;
    private String groupName;
    private String createdGit;

    private String createDate;

    private Integer examLevel;

    private List<QuestionResponseModel> questionList;
    private List<UserResponseModel> customerList;
}
