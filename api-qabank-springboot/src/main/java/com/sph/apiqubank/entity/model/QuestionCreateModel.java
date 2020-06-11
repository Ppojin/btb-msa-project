package com.sph.apiqubank.entity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionCreateModel {
    @Size(min = 2, max = 100, message = "size must be 2~100")
    private String title;
    @NotNull(message = "contents need value")
    private String contents;
    @NotNull(message = "gitUrl need value")
    private String gitUrl;
    @NotNull(message = "gitUrl need value")
    private Integer gitRepositoryId;
    @Size(min = 4, max = 16, message = "length must be 4~16")
    private String groupName;
    private List<String> testMethod;
}
