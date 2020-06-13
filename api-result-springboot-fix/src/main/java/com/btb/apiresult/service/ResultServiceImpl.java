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
    ResultRepository resultRepository;
    TestCaseResultRepository testCaseResultRepository;
    @Autowired
    public ResultServiceImpl(ResultRepository resultRepository, TestCaseResultRepository testCaseResultRepository) {
        this.resultRepository = resultRepository;
        this.testCaseResultRepository = testCaseResultRepository;
    }

    @Override
    public ResultDto createResult(ResultDto resultDto) {

        ModelMapper modelMapper = new ModelMapper();
        ResultEntity resultEntity = modelMapper.map(resultDto, ResultEntity.class);
        ResultEntity savedResultEntity = resultRepository.save(resultEntity);

        String questionResultPK = savedResultEntity.getQuestionResultPK();
        List<TestCaseResultResponseModel> testCaseResultResponseModelList = new ArrayList<>();
        resultDto.getTestCaseResultCreateList().forEach(testCaseResultCreateModel -> {
            TestCaseResultEntity testCaseResultEntity = modelMapper.map(testCaseResultCreateModel, TestCaseResultEntity.class);
            testCaseResultEntity.setQuestionResultPK(questionResultPK);
            testCaseResultResponseModelList.add(modelMapper.map(testCaseResultRepository.save(testCaseResultEntity), TestCaseResultResponseModel.class));
        });
        resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
        resultDto.setQuestionResultPK(resultEntity.getQuestionResultPK());

        return resultDto;
    }

    @Override
    public ResultDto getResult(String questionResultPK) {
        ModelMapper modelMapper = new ModelMapper();
        ResultEntity resultEntity = resultRepository.findByQuestionResultPK(questionResultPK);
        if(resultEntity == null){
            throw new RuntimeException("resultEntity가 없습니다");
        }
        ResultDto resultDto = modelMapper.map(resultEntity, ResultDto.class);
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
            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByQuestionResultPK(resultDto.getQuestionResultPK());
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
//            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByQuestionResultPK(resultDto.getQuestionResultPK());
//            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
//            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
//            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
//        });
//        return resultDtoList;
//    }
//
//    @Override
//    public List<ResultDto> listAllByQuestionPKAndCustomerPK(String QuestionPK, String customerPK) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration().setAmbiguityIgnored(true);
//        List<ResultEntity> resultEntityList = resultRepository.findAllByQuestionPKAndCustomerPK(QuestionPK, customerPK);
//        Type resultDtoListType = new TypeToken<List<ResultDto>>(){}.getType();
//        List<ResultDto> resultDtoList = modelMapper.map(resultEntityList, resultDtoListType);
//        resultDtoList.forEach(resultDto -> {
//            List<TestCaseResultEntity> testCaseResultEntityList = testCaseResultRepository.findAllByQuestionResultPK(resultDto.getQuestionResultPK());
//            Type testCaseResultResponseListType = new TypeToken<List<TestCaseResultResponseModel>>(){}.getType();
//            List<TestCaseResultResponseModel> testCaseResultResponseModelList = modelMapper.map(testCaseResultEntityList, testCaseResultResponseListType);
//            resultDto.setTestCaseResultResponseList(testCaseResultResponseModelList);
//        });
//        return resultDtoList;
//    }
}
