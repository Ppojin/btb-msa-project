package com.sph.apiqubank.controller;

import com.sph.apiqubank.entity.CategoryEntity;
import com.sph.apiqubank.entity.CategoryRepository;
import com.sph.apiqubank.entity.Model.CategoryCreateModel;
import com.sph.apiqubank.entity.Model.QuestionCreateModel;
import com.sph.apiqubank.entity.Model.QuestionResponseModel;
import com.sph.apiqubank.entity.QuestionEntity;
import com.sph.apiqubank.entity.QuestionRepository;
import com.sph.apiqubank.entity.dto.QuestionDto;
import com.sph.apiqubank.module.JwtParser;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Api(tags = {"1. Questions"})
@RestController
@RequestMapping("/v1/questions")
public class QuestionController {
    @Autowired
    Environment env;

    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    CategoryRepository categoryRepository;

//    static String categoryNmaeDummy = "Srping_Boot";
//
//    static String questionTitleDummy = "question title";
//    static String questionContentsDummy = "question contents";
//    static String questionGitUrlDummy = "http://github.com/ppojin/someting.git";
//    static String questionGroupNameDummy = "Default";
//
//    static CategoryEntity createdCategoryEntity;
//    static QuestionEntity createdQuestionEntity;


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
        questionDto.setCategoryJson(new HashMap<Long, String>());
        for(int i = 0 ; i < questionDto.getCategoryPK().size() ; i++){
            Long categoryPK = questionDto.getCategoryPK().get(i);
            String categoryName = categoryRepository.findByCategoryPK(categoryPK).getCategoryName();
            questionDto.getCategoryJson().put(categoryPK, categoryName);
        }
        QuestionResponseModel questionResponseModel = modelMapper.map(questionDto, QuestionResponseModel.class);
        return ResponseEntity.status(HttpStatus.OK).body(questionResponseModel);
    }

    @GetMapping()
    public ResponseEntity<List<QuestionResponseModel>> listAllQuestion(@RequestParam String groupName){
        ModelMapper modelMapper = new ModelMapper();
        List<QuestionEntity> questionEntityList;
        if(groupName == null){
            questionEntityList = questionRepository.findAll();
        } else {
            questionEntityList = questionRepository.findAllByGroupName(groupName);
        }
        Type questionDtoListType = new TypeToken<List<QuestionDto>>(){}.getType();
        List<QuestionDto> questionDtoList = modelMapper.map(questionEntityList, questionDtoListType);
        for(QuestionDto questionDto : questionDtoList){
            questionDto.setCategoryJson(new HashMap<Long, String>());
            for(int i = 0 ; i < questionDto.getCategoryPK().size() ; i++){
                Long categoryPK = questionDto.getCategoryPK().get(i);
                String categoryName = categoryRepository.findByCategoryPK(categoryPK).getCategoryName();
                questionDto.getCategoryJson().put(categoryPK, categoryName);
            }
        }
        Type questionResponseModelListType = new TypeToken<List<QuestionResponseModel>>(){}.getType();
        List<QuestionResponseModel> questionResponseModelList = modelMapper.map(questionDtoList, questionResponseModelListType);
        return ResponseEntity.status(HttpStatus.OK).body(questionResponseModelList);
    }

    @GetMapping("/{questionPK}")
    public ResponseEntity<QuestionResponseModel> readQuestion(@PathVariable String questionPK){
        QuestionEntity questionEntity = questionRepository.findByQuestionPK(questionPK);
        QuestionDto questionDto = new ModelMapper().map(questionEntity, QuestionDto.class);
        questionDto.setCategoryJson(new HashMap<Long, String>());
        for(int i = 0 ; i < questionDto.getCategoryPK().size() ; i++){
            Long categoryPK = questionDto.getCategoryPK().get(i);
            String categoryName = categoryRepository.findByCategoryPK(categoryPK).getCategoryName();
            questionDto.getCategoryJson().put(categoryPK, categoryName);
        }
        QuestionResponseModel questionResponseModel = new ModelMapper().map(questionDto, QuestionResponseModel.class);
        return ResponseEntity.status(HttpStatus.OK).body(questionResponseModel);
    }

}
