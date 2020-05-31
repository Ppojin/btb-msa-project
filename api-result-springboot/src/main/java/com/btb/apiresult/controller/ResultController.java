package com.btb.apiresult.controller;

import com.btb.apiresult.data.ResultDto;
import com.btb.apiresult.data.model.ExamResultCreateModel;
import com.btb.apiresult.data.model.ExamResultResponseModel;
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
    public ResponseEntity<ExamResultResponseModel> createResult(@RequestBody ExamResultCreateModel examResultCreateModel){
        ModelMapper modelMapper = new ModelMapper();
        ResultDto resultDto = modelMapper.map(examResultCreateModel, ResultDto.class);
        ResultDto resultServiceResult = resultService.createResult(resultDto);
        ExamResultResponseModel examResultResponseModel = modelMapper.map(resultServiceResult, ExamResultResponseModel.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(examResultResponseModel);
    }

    @GetMapping
    public ResponseEntity<List<ExamResultResponseModel>> listAllResult(
            @RequestParam("customerPk") String customerPk,
            @RequestParam("examPk") String examPk
    ){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        Type resultResponseModelListType = new TypeToken<List<ExamResultResponseModel>>(){}.getType();
        List<ResultDto> resultDtoList;
        if(customerPk != null && examPk != null){
            resultDtoList = resultService.listAll().stream().filter(resultDto -> resultDto.getCustomerPk().equals(customerPk) && resultDto.getExamPk().equals(examPk)).collect(Collectors.toList());
        } else if (customerPk != null){
            resultDtoList = resultService.listAll().stream().filter(resultDto -> resultDto.getCustomerPk().equals(customerPk)).collect(Collectors.toList());
        } else if (examPk != null){
            resultDtoList = resultService.listAll().stream().filter(resultDto -> resultDto.getExamPk().equals(examPk)).collect(Collectors.toList());
        } else {
            resultDtoList = resultService.listAll();
        }
        List<ExamResultResponseModel> examResultResponseModelList = modelMapper.map(resultDtoList, resultResponseModelListType);
        return ResponseEntity.status(HttpStatus.OK).body(examResultResponseModelList);
    }
}
