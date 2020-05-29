package com.sph.apiexam.entity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamCreateModel {
    @NotNull
    private String title;
    @NotNull
    private String contents;
    private Date startDate;
    private Date endDate;
    @NotNull
    private String groupName;
    @DecimalMax(value = "5", message = "value must between 1~3")
    @DecimalMin(value = "1", message = "value must between 1~3")
    private Integer examLevel;

    private List<String> questionPK;
    private List<String> customerPK;
}
