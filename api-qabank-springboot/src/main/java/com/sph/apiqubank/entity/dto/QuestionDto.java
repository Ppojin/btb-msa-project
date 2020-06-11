package com.sph.apiqubank.entity.dto;

import com.sph.apiqubank.entity.feignmodel.QuestionResultResponseModel;
import lombok.*;

import java.util.List;
import java.util.Map;

@Data @Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDto {
    private String questionPK;
    private String title;
    private String contents;
    private String gitUrl;
    private Integer gitRepositoryId;
    private String groupName;
    private String questionResultPK;
    private QuestionResultResponseModel questionResult;

    private List<String> testMethod;
}
