package com.btb.apiresult.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionResultCreateModel {
    private String questionPK;
    private String groupName;
    private String customerPK;
    private String gitUrl;
    private String done;
    private List<TestCaseResultCreateModel> testCaseResultCreateList;

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

    public String getGitUrl() {
        return gitUrl;
    }

    public void setGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
    }

    public String getDone() {
        return done;
    }

    public void setDone(String done) {
        this.done = done;
    }

    public List<TestCaseResultCreateModel> getTestCaseResultCreateList() {
        return testCaseResultCreateList;
    }

    public void setTestCaseResultCreateList(List<TestCaseResultCreateModel> testCaseResultCreateList) {
        this.testCaseResultCreateList = testCaseResultCreateList;
    }
}
