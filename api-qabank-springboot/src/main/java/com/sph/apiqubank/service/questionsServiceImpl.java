package com.sph.apiqubank.service;

import com.sph.apiqubank.entity.QuestionsEntity;
import com.sph.apiqubank.entity.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class questionsServiceImpl implements questionsService{
    QuestionsRepository repository;

    @Autowired
    public questionsServiceImpl(QuestionsRepository repository) {
        this.repository = repository;
    }

    @Override
    public QuestionsEntity createQuestion(QuestionsEntity questionDetails) {
        return repository.save(questionDetails);
    }

    @Override
    public QuestionsEntity readQuestion(String questionPK) {
        return repository.findByQuestionPK(questionPK);
    }

    @Override
    public List<QuestionsEntity> listAllQuestion(String groupName) {
//        List<QuestionsEntity> questionList = repository.findAllByGroupName(groupName);
//        ModelMapper modelMapper = new ModelMapper();
//        Type listType = new TypeToken<List<QuestionDto>>(){}.getType();
//        List<QuestionDto> result = modelMapper.map(questionList, listType);
//        return questionList;
        return repository.findAllByGroupName(groupName);
    }
}
