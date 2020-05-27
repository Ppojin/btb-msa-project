package com.sph.apiqubank.entity.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionCreateModel {
    private String title;
    private String contents;
    private String gitUlr;
    private String groupName;
    private Integer category;
}
