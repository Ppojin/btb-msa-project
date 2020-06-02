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

        String examResultPK = savedResultEntity.getExamResultPK();
        List<TestCaseResultResponseModel> testCaseResultResponseModelList = new ArrayList<>();
        resultDto.getTestCaseResultCreateList().forEach(testCaseResultCreateModel -> {
            TestCaseResultEntity testCaseResultEntity = modelMapper.map(testCaseResultCreateModel, TestCaseResultEntity.class);
            testCaseResultEntity.setExamResultPK(examResultPK);
            testCaseResultResponseModelList.add(modelMapper.map(testCaseResultRepository.save(testCaseResultEntity), TestCaseResultResponseModel.class));
        });
        resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
        resultDto.setExamResultPK(resultEntity.getExamResultPK());

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
            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByExamResultPK(resultDto.getExamResultPK());
            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
        });
        return resultDtoList;
    }

//    @Override
//    public List<ResultDto> listAllByCustomerPK(String customerPK) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration().setAmbiguityIgnored(true);
//        List<ResultEntity> resultEntityList = resultRepository.findAllByCustomerPK(customerPK);
//        Type resultDtoListType = new TypeToken<List<ResultDto>>(){}.getType();
//        List<ResultDto> resultDtoList = modelMapper.map(resultEntityList, resultDtoListType);
//        resultDtoList.forEach(resultDto -> {
//            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByExamResultPK(resultDto.getExamResultPK());
//            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
//            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
//            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
//        });
//        return resultDtoList;
//    }
//
//    @Override
//    public List<ResultDto> listAllByExamPKAndCustomerPK(String examPK, String customerPK) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration().setAmbiguityIgnored(true);
//        List<ResultEntity> resultEntityList = resultRepository.findAllByExamPKAndCustomerPK(examPK, customerPK);
//        Type resultDtoListType = new TypeToken<List<ResultDto>>(){}.getType();
//        List<ResultDto> resultDtoList = modelMapper.map(resultEntityList, resultDtoListType);
//        resultDtoList.forEach(resultDto -> {
//            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByExamResultPK(resultDto.getExamResultPK());
//            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
//            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
//            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
//        });
//        return resultDtoList;
//    }
}
