package com.sph.apiqubank.entity.Model;

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
    @NotNull(message = "need value")
    private String contents;
    @NotNull(message = "need value")
    private String gitUrl;
    @Size(min = 4, max = 16, message = "length must be 4~16")
    private String groupName;
    private List<Long> categoryPK;
    private List<String> testMethod;
}
