package com.sph.apiexam.entity;

import com.sph.apiexam.entity.model.QuestionResponseModel;
import com.sph.apiexam.entity.model.UserResponseModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ExamDto {
    private String examPK;
    private String title;
    private String contents;
    private Date startDate;
    private Date endDate;
    private String groupName;
    private String createdGit;

    private String createDate;

    private Integer examLevel;

    private List<String> questionPK;
    private List<QuestionResponseModel> questionList;
    private List<String> customerPK;
    private List<UserResponseModel> customerList;
}
