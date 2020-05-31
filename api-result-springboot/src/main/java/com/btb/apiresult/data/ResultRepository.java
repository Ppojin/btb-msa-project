package com.btb.apiresult.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepository extends CrudRepository<ResultEntity, String> {
    ResultEntity findByExamResultPk(String examResultPk);
    List<ResultEntity> findAll();
    List<ResultEntity> findAllByCustomerPk(String customerPk);
    List<ResultEntity> findAllByExamPkAndCustomerPk(String examPk, String customerPk);
}
