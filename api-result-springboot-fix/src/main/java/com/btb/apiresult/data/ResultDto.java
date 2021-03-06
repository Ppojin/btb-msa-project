package com.btb.apiresult.data;

import com.btb.apiresult.data.model.TestCaseResultCreateModel;
import com.btb.apiresult.data.model.TestCaseResultResponseModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResultDto {
    private String questionResultPK;
    private String questionPK;
    private String groupName;
    private String customerPK;
    private String createDate;
    private String gitUrl;
    private List<TestCaseResultCreateModel> testCaseResultCreateList;
    private List<TestCaseResultResponseModel> testCaseResultResponseList;
}
