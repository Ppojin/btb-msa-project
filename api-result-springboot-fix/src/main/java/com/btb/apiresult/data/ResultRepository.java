package com.btb.apiresult.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepository extends CrudRepository<ResultEntity, String> {
    ResultEntity findByQuestionResultPK(String questionResultPK);
    List<ResultEntity> findAll();
    List<ResultEntity> findAllByCustomerPK(String customerPK);
    List<ResultEntity> findAllByQuestionPKAndCustomerPK(String questionPK, String customerPK);
}
