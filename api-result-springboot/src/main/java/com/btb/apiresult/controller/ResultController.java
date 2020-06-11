package com.btb.apiresult.controller;

import com.btb.apiresult.data.ResultDto;
import com.btb.apiresult.data.model.QuestionResultCreateModel;
import com.btb.apiresult.data.model.QuestionResultResponseModel;
import com.btb.apiresult.service.ResultService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/result")
public class ResultController {
    @Autowired
    ResultService resultService;

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<QuestionResultResponseModel> createResult(@RequestBody QuestionResultCreateModel QuestionResultCreateModel){
        ModelMapper modelMapper = new ModelMapper();
        ResultDto resultDto = modelMapper.map(QuestionResultCreateModel, ResultDto.class);
        ResultDto resultServiceResult = resultService.createResult(resultDto);
        QuestionResultResponseModel questionResultResponseModel = modelMapper.map(resultServiceResult, QuestionResultResponseModel.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(questionResultResponseModel);
    }

    @GetMapping
    public ResponseEntity<List<QuestionResultResponseModel>> listAllResult(
            @RequestParam("customerPK") String customerPK,
            @RequestParam("questionPK") String questionPK
    ){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        Type resultResponseModelListType = new TypeToken<List<QuestionResultResponseModel>>(){}.getType();
        List<ResultDto> resultDtoList;
        if(customerPK != null && questionPK != null){
            resultDtoList = resultService.listAll().stream().filter(resultDto -> {
                return resultDto.getCustomerPK().equals(customerPK) && resultDto.getQuestionPK().equals(questionPK);
            }).collect(Collectors.toList()
            );
        } else if (customerPK != null){
            resultDtoList = resultService.listAll().stream().filter(resultDto -> {
                return resultDto.getCustomerPK().equals(customerPK);
            }).collect(Collectors.toList());
        } else if (questionPK != null){
            resultDtoList = resultService.listAll().stream().filter(resultDto -> {
                return resultDto.getQuestionPK().equals(questionPK);
            }).collect(Collectors.toList());
        } else {
            resultDtoList = resultService.listAll();
        }
        List<QuestionResultResponseModel> questionResultResponseModelList = modelMapper.map(resultDtoList, resultResponseModelListType);
        return ResponseEntity.status(HttpStatus.OK).body(questionResultResponseModelList);
    }
}
