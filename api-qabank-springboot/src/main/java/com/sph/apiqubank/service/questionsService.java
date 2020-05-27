package com.sph.apiqubank.service;

import com.sph.apiqubank.entity.QuestionsEntity;

import java.util.List;

public interface questionsService {
    QuestionsEntity createQuestion(QuestionsEntity question);
    QuestionsEntity readQuestion(String questionId);
    List<QuestionsEntity> listAllQuestion(String questionId);
}
