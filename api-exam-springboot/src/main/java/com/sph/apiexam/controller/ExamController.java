package com.sph.apiexam.controller;

import com.sph.apiexam.entity.ExamDto;
import com.sph.apiexam.entity.model.ExamCreateModel;
import com.sph.apiexam.entity.model.ExamResponseModel;
import com.sph.apiexam.service.ExamService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/exam")
public class ExamController {
    @Autowired
    ExamService examService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ExamResponseModel examResponseModel(@RequestBody @Valid ExamCreateModel examCreateModel){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        ExamDto examDto = modelMapper.map(examCreateModel, ExamDto.class);
        ExamResponseModel examResponseModel = modelMapper.map(examService.createExam(examDto), ExamResponseModel.class);
        return examResponseModel;
    }

    @GetMapping("{examPK}")
    public ExamResponseModel examResponseModelList(@PathVariable String examPK){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        ExamDto examDto = examService.readExam(examPK);
        ExamResponseModel examResponseModel = modelMapper.map(examDto, ExamResponseModel.class);
        return examResponseModel;
    }

    @GetMapping
    public List<ExamResponseModel> listAllExam(@RequestParam("groupName") String groupName){
        List<ExamDto> examDtoList;
        if(groupName==null){
            examDtoList = examService.listAll();
        } else {
            examDtoList = examService.listAllByGroupName(groupName);
        }

        Type typeOfExamResponseModelList = new TypeToken<List<ExamResponseModel>>(){}.getType();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        return modelMapper.map(examDtoList, typeOfExamResponseModelList);
    }
}
