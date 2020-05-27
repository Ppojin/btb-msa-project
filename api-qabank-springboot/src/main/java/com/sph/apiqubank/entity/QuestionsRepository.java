package com.sph.apiqubank.entity;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestionsRepository extends CrudRepository<QuestionsEntity, String> {
    QuestionsEntity findByQuestionPK(String questionId);
    QuestionsEntity findByTitle(String title);
    List<QuestionsEntity> findAllByCategory(Integer categoryId);
    List<QuestionsEntity> findAllByGroupName(String groupName);
}
