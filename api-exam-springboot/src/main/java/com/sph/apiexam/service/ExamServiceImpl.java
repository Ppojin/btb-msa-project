package com.sph.apiexam.service;

import com.sph.apiexam.client.QABankServiceClient;
import com.sph.apiexam.client.UserServiceClient;
import com.sph.apiexam.entity.ExamDto;
import com.sph.apiexam.entity.ExamEntity;
import com.sph.apiexam.entity.ExamRepository;
import com.sph.apiexam.entity.model.QuestionResponseModel;
import com.sph.apiexam.entity.model.UserResponseModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ExamServiceImpl implements ExamService{
    private ExamRepository examRepository;
    private UserServiceClient userServiceClient;
    private QABankServiceClient qaBankServiceClient;

    public ExamServiceImpl(ExamRepository examRepository, UserServiceClient userServiceClient, QABankServiceClient qaBankServiceClient) {
        this.examRepository = examRepository;
        this.userServiceClient = userServiceClient;
        this.qaBankServiceClient = qaBankServiceClient;
    }

    private ExamDto examEntityToExamDto(ExamDto examDto){
        List<QuestionResponseModel> questionResponseModelList = new ArrayList<>();
        List<UserResponseModel> userResponseModelList = new ArrayList<>();
        examDto.getCustomerPK().forEach(customerPK -> {
            UserResponseModel user = userServiceClient.getUser(customerPK).getBody();
            userResponseModelList.add(user);
        });
        examDto.getQuestionPK().forEach(questionPK -> {
            QuestionResponseModel question = qaBankServiceClient.readQuestion(questionPK).getBody();
            questionResponseModelList.add(question);
        });
        examDto.setCustomerList(userResponseModelList);
        examDto.setQuestionList(questionResponseModelList);
        return examDto;
    }

    @Override
    public ExamDto createExam(ExamDto examDto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        ExamEntity examEntity = modelMapper.map(examDto, ExamEntity.class);
        ExamDto createdExamDto = modelMapper.map(examRepository.save(examEntity), ExamDto.class);
        return examEntityToExamDto(createdExamDto);
    }

    @Override
    public ExamDto readExam(String examPK) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        ExamEntity examEntity = examRepository.findByExamPK(examPK);
        ExamDto examDto = modelMapper.map(examEntity, ExamDto.class);
        return examEntityToExamDto(examDto);
    }

    @Override
    public List<ExamDto> listAll() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        List<ExamEntity> examEntityList = examRepository.findAll();
        List<ExamDto> result = new ArrayList<>();
        examEntityList.forEach(examEntity -> {
            ExamDto examDto = modelMapper.map(examEntity, ExamDto.class);
            result.add(examEntityToExamDto(examDto));
        });
        return result;
    }

    @Override
    public List<ExamDto> listAllByGroupName(String groupName) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        List<ExamEntity> examEntityList = examRepository.findAllByGroupName(groupName);
        List<ExamDto> result = new ArrayList<>();
        examEntityList.forEach(examEntity -> {
            ExamDto examDto = modelMapper.map(examEntity, ExamDto.class);
            result.add(examEntityToExamDto(examDto));
        });
        return result;
    }
}
