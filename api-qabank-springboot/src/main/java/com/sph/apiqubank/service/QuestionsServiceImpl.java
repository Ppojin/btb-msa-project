package com.sph.apiqubank.service;

import com.sph.apiqubank.client.GitlabClient;
import com.sph.apiqubank.entity.QuestionEntity;
import com.sph.apiqubank.entity.QuestionRepository;
import com.sph.apiqubank.entity.dto.QuestionDto;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class QuestionsServiceImpl implements QuestionsService {
    QuestionRepository questionRepository;
    GitlabClient gitlabClient;

    @Autowired
    public QuestionsServiceImpl(QuestionRepository questionRepository, GitlabClient gitlabClient) {
        this.questionRepository = questionRepository;
        this.gitlabClient = gitlabClient;
    }

    private List<QuestionDto> getQuestionDtos(List<QuestionEntity> questionEntityList) {
        Type questionDtoListType = new TypeToken<List<QuestionDto>>(){}.getType();
        List<QuestionDto> questionDtoList = new ModelMapper().map(questionEntityList, questionDtoListType);
        return questionDtoList;
    }

    @Override
    public QuestionDto createQuestion(QuestionDto question) {
        ModelMapper modelMapper = new ModelMapper();
        QuestionEntity questionEntity = modelMapper.map(question, QuestionEntity.class);
        QuestionEntity questionEntityResult = questionRepository.save(questionEntity);
        QuestionDto questionDto = modelMapper.map(questionEntityResult, QuestionDto.class);
        return questionDto;
    }

    @Override
    public QuestionDto readQuestion(String questionPK) {
        QuestionEntity questionEntity = questionRepository.findByQuestionPK(questionPK);
        QuestionDto questionDto = new ModelMapper().map(questionEntity, QuestionDto.class);
        return questionDto;
    }

    @Override
    public List<QuestionDto> listAllQuestion(String groupName) {
        List<QuestionEntity> questionEntityList = questionRepository.findAllByGroupName(groupName);
        return getQuestionDtos(questionEntityList);
    }

    @Override
    public List<QuestionDto> listAll() {
        List<QuestionEntity> questionEntityList = questionRepository.findAll();
        return getQuestionDtos(questionEntityList);
    }

//    @Override
//    public List<QuestionDto> listAllQuestionByGroupName(String groupName) {
//        ModelMapper modelMapper = new ModelMapper();
//        List<QuestionEntity> questionEntityList = questionRepository.findAllByGroupName(groupName);
//        Type questionDtoListType = new TypeToken<List<QuestionDto>>(){}.getType();
//        List<QuestionDto> questionDtoList = modelMapper.map(questionEntityList, questionDtoListType);
//        return questionDtoList;
//    }
}
