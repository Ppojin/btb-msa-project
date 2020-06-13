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

    public String getQuestionResultPK() {
        return questionResultPK;
    }

    public void setQuestionResultPK(String questionResultPK) {
        this.questionResultPK = questionResultPK;
    }

    public String getQuestionPK() {
        return questionPK;
    }

    public void setQuestionPK(String questionPK) {
        this.questionPK = questionPK;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getCustomerPK() {
        return customerPK;
    }

    public void setCustomerPK(String customerPK) {
        this.customerPK = customerPK;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getGitUrl() {
        return gitUrl;
    }

    public void setGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
    }

    public List<TestCaseResultCreateModel> getTestCaseResultCreateList() {
        return testCaseResultCreateList;
    }

    public void setTestCaseResultCreateList(List<TestCaseResultCreateModel> testCaseResultCreateList) {
        this.testCaseResultCreateList = testCaseResultCreateList;
    }

    public List<TestCaseResultResponseModel> getTestCaseResultResponseList() {
        return testCaseResultResponseList;
    }

    public void setTestCaseResultResponseList(List<TestCaseResultResponseModel> testCaseResultResponseList) {
        this.testCaseResultResponseList = testCaseResultResponseList;
    }
}
