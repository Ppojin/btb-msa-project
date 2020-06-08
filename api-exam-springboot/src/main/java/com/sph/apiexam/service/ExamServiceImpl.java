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
import org.springframework.core.env.Environment;
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
    private Environment env;

    public ExamServiceImpl(ExamRepository examRepository, UserServiceClient userServiceClient, QABankServiceClient qaBankServiceClient, Environment env) {
        this.examRepository = examRepository;
        this.userServiceClient = userServiceClient;
        this.qaBankServiceClient = qaBankServiceClient;
        this.env = env;
    }

    private ExamDto examEntityToExamDto(ExamDto examDto) throws RuntimeException{
        List<QuestionResponseModel> questionResponseModelList = new ArrayList<>();
        List<UserResponseModel> userResponseModelList = new ArrayList<>();
        examDto.getCustomerPK().forEach(customerPK -> {
            UserResponseModel user = userServiceClient.getUser(customerPK).getBody();
            if (user == null) throw new RuntimeException(String.format("user <%s> not existed", user));
            userResponseModelList.add(user);
        });

        examDto.getQuestionPK().forEach(questionPK -> {
            QuestionResponseModel question = qaBankServiceClient.readQuestion(questionPK).getBody();
            if (question == null) throw new RuntimeException(String.format("question <%s> not existed", question));
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

        ExamDto loadedExamDto = examEntityToExamDto(examDto);

        String examPK = examRepository.save(modelMapper.map(loadedExamDto, ExamEntity.class)).getExamPK();
        loadedExamDto.setExamPK(examPK);

        String gitUrl = String.format("http://%s/btb/%s", env.getProperty("git_server.host"), examPK);
        loadedExamDto.setCreatedGit(gitUrl);
        //Todo: create git project
        //============================================================

        examRepository.save(modelMapper.map(loadedExamDto, ExamEntity.class));
        return loadedExamDto;
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
