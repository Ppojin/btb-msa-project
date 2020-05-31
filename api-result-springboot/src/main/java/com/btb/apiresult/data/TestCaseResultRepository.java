package com.btb.apiresult.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestCaseResultRepository extends CrudRepository<TestCaseResultEntity, String> {
    TestCaseResultEntity findByTestCasePk(String testCasePk);
    List<TestCaseResultEntity> findAll();
    List<TestCaseResultEntity> findAllByExamResultPk(String ExamResultesultPK);
}
