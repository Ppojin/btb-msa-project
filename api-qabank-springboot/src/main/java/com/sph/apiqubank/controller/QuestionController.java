package com.sph.apiqubank.controller;

import com.sph.apiqubank.client.CustomerClient;
import com.sph.apiqubank.client.GitlabClient;
import com.sph.apiqubank.client.ResultClient;
import com.sph.apiqubank.entity.feignmodel.*;
import com.sph.apiqubank.entity.model.QuestionCreateModel;
import com.sph.apiqubank.entity.model.QuestionListResponseModel;
import com.sph.apiqubank.entity.model.QuestionResponseModel;
import com.sph.apiqubank.entity.QuestionEntity;
import com.sph.apiqubank.entity.QuestionRepository;
import com.sph.apiqubank.entity.dto.QuestionDto;
import com.sph.apiqubank.service.QuestionsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Api(tags = {"1. Questions"})
@RestController
@Slf4j
@RequestMapping("/v1/questions")
public class QuestionController {
    private Environment env;
    private QuestionRepository questionRepository;
    private QuestionsService questionsService;
    private CustomerClient customerClient;
    private GitlabClient gitlabClient;
    private ResultClient resultClient;

    @Autowired
    public QuestionController(Environment env, QuestionRepository questionRepository, CustomerClient customerClient, QuestionsService questionsService, GitlabClient gitlabClient, ResultClient resultClient) {
        this.env = env;
        this.questionRepository = questionRepository;
        this.customerClient = customerClient;
        this.questionsService = questionsService;
        this.gitlabClient = gitlabClient;
        this.resultClient = resultClient;
    }

    @ApiOperation(value="문제 등록")
    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<QuestionResponseModel> createQuestion(@RequestBody QuestionCreateModel questionCreateModel){
        ModelMapper modelMapper = new ModelMapper();
        QuestionEntity questionEntity = modelMapper.map(questionCreateModel, QuestionEntity.class);
        QuestionEntity createdQuestionEntity = questionRepository.save(questionEntity);
        QuestionDto questionDto = modelMapper.map(createdQuestionEntity, QuestionDto.class);
        QuestionResponseModel questionResponseModel = modelMapper.map(questionDto, QuestionResponseModel.class);
        return ResponseEntity.status(HttpStatus.OK).body(questionResponseModel);
    }

    @GetMapping()
    public ResponseEntity<List<QuestionListResponseModel>> listAllQuestion(@RequestParam String groupName){
        ModelMapper modelMapper = new ModelMapper();
        List<QuestionEntity> questionEntityList;
        if(groupName == null){
            questionEntityList = questionRepository.findAll();
        } else {
            questionEntityList = questionRepository.findAllByGroupName(groupName);
        }
        Type questionDtoListType = new TypeToken<List<QuestionDto>>(){}.getType();
        List<QuestionDto> questionDtoList = modelMapper.map(questionEntityList, questionDtoListType);
        Type questionListResponseModelListType = new TypeToken<List<QuestionListResponseModel>>(){}.getType();
        List<QuestionListResponseModel> questionListResponseModelList = modelMapper.map(questionDtoList, questionListResponseModelListType);
        return ResponseEntity.status(HttpStatus.OK).body(questionListResponseModelList);
    }

    @GetMapping("/{questionPK}/{customerPK}")
    public ResponseEntity<QuestionResponseModel> readQuestion(
            @PathVariable String questionPK,
            @PathVariable String customerPK
    ){
        ResponseEntity<UserResponseModel> customer = customerClient.getUser(customerPK);
//        ResponseEntity<String> customerToken = customerClient.getToken(customerPK);
        if (customer.getStatusCode() == HttpStatus.OK){
//        if(customerToken.getStatusCode() == HttpStatus.OK){
            QuestionEntity questionEntity = questionRepository.findByQuestionPK(questionPK);
            String uuid = UUID.randomUUID().toString();

            // fork repository
            log.info(">>> fork repository");
            GitlabForkResponseModel gitlabForkResponseModel = gitlabClient.forkQuestion(
                    new GitlabForkRequestModel(uuid),
                    questionEntity.getGitRepositoryId(),
                    customerClient.getToken(customerPK).getBody()
            );
            String resultGitUrl = String.format("http://gitlab.ppojin.com/%s/%s.git", customer.getBody().getName(), uuid);
            log.info(gitlabForkResponseModel.toString());

            // create result
            log.info(">>> create result");
            QuestionResultCreateModel questionResultCreateModel = new QuestionResultCreateModel();
            questionResultCreateModel.setQuestionPK(questionPK);
            questionResultCreateModel.setGroupName(customer.getBody().getGroupName());
            questionResultCreateModel.setCustomerPK(customerPK);
            questionResultCreateModel.setGitUrl(resultGitUrl);
            List<TestCaseResultCreateModel> testCaseResultCreateModelList = new ArrayList<>();
            for(String testMethod : questionEntity.getTestMethod()){
                TestCaseResultCreateModel testCaseResultCreateModel = new TestCaseResultCreateModel();
                testCaseResultCreateModel.setTestCaseMethod(testMethod);
                testCaseResultCreateModelList.add(testCaseResultCreateModel);
            }
            questionResultCreateModel.setTestCaseResultCreateList(testCaseResultCreateModelList);
            ResponseEntity<QuestionResultResponseModel> result = resultClient.createResult(questionResultCreateModel);
            log.info(result.toString());

            // return 전 데이터 정렬
            QuestionDto questionDto = new ModelMapper().map(questionEntity, QuestionDto.class);
            questionDto.setGitUrl(resultGitUrl);
            QuestionResponseModel questionResponseModel = new ModelMapper().map(questionDto, QuestionResponseModel.class);
            questionResponseModel.setQuestionResultPK(result.getBody().getQuestionResultPK());
            return ResponseEntity.status(HttpStatus.OK).body(questionResponseModel);

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
