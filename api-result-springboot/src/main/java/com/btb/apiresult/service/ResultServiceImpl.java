package com.btb.apiresult.service;

import com.btb.apiresult.data.*;
import com.btb.apiresult.data.model.TestCaseResultResponseModel;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@Service
public class ResultServiceImpl implements ResultService{
    @Autowired
    ResultRepository resultRepository;
    @Autowired
    TestCaseResultRepository testCaseResultRepository;

    @Override
    public ResultDto createResult(ResultDto resultDto) {
        ModelMapper modelMapper = new ModelMapper();
        ResultEntity resultEntity = modelMapper.map(resultDto, ResultEntity.class);
        ResultEntity savedResultEntity = resultRepository.save(resultEntity);
        List<TestCaseResultResponseModel> testCaseResultResponseModelList = new ArrayList<>();
        resultDto.getTestCaseResultCreateList().forEach(testCaseResultCreateModel -> {
            TestCaseResultEntity testCaseResultEntity = modelMapper.map(testCaseResultCreateModel, TestCaseResultEntity.class);
            testCaseResultEntity.setExamResultPk(savedResultEntity.getExamResultPk());
            testCaseResultResponseModelList.add(modelMapper.map(testCaseResultRepository.save(testCaseResultEntity), TestCaseResultResponseModel.class));
        });
        resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
        resultDto.setExamResultPk(resultEntity.getExamResultPk());
        return resultDto;
    }

    @Override
    public List<ResultDto> listAll() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setAmbiguityIgnored(true);
        List<ResultEntity> resultEntityList = resultRepository.findAll();
        Type resultDtoListType = new TypeToken<List<ResultDto>>(){}.getType();
        List<ResultDto> resultDtoList = modelMapper.map(resultEntityList, resultDtoListType);
        resultDtoList.forEach(resultDto -> {
            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByExamResultPk(resultDto.getExamResultPk());
            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
        });
        return resultDtoList;
    }

//    @Override
//    public List<ResultDto> listAllByCustomerPk(String customerPk) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration().setAmbiguityIgnored(true);
//        List<ResultEntity> resultEntityList = resultRepository.findAllByCustomerPk(customerPk);
//        Type resultDtoListType = new TypeToken<List<ResultDto>>(){}.getType();
//        List<ResultDto> resultDtoList = modelMapper.map(resultEntityList, resultDtoListType);
//        resultDtoList.forEach(resultDto -> {
//            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByExamResultPk(resultDto.getExamResultPk());
//            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
//            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
//            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
//        });
//        return resultDtoList;
//    }
//
//    @Override
//    public List<ResultDto> listAllByExamPkAndCustomerPk(String examPk, String customerPk) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration().setAmbiguityIgnored(true);
//        List<ResultEntity> resultEntityList = resultRepository.findAllByExamPkAndCustomerPk(examPk, customerPk);
//        Type resultDtoListType = new TypeToken<List<ResultDto>>(){}.getType();
//        List<ResultDto> resultDtoList = modelMapper.map(resultEntityList, resultDtoListType);
//        resultDtoList.forEach(resultDto -> {
//            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByExamResultPk(resultDto.getExamResultPk());
//            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
//            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
//            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
//        });
//        return resultDtoList;
//    }
}
