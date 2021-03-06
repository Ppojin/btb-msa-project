package com.sph.apiqubank.entity.dto;

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
    private String groupName;

    private List<Long> categoryPK;
    private Map<Long, String> categoryJson;
    private List<String> testMethod;
}
