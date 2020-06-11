package com.sph.apiqubank.service;

import com.sph.apiqubank.entity.QuestionEntity;
import com.sph.apiqubank.entity.dto.QuestionDto;

import java.util.List;

public interface questionsService {
    QuestionDto createQuestion(QuestionDto question);
    QuestionDto readQuestion(String questionPK);
    List<QuestionDto> listAllQuestion(String groupName);
    List<QuestionDto> listAll();
//    List<QuestionDto> listAllQuestionByGroupName(String groupName);
}
