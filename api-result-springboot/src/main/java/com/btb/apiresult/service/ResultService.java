package com.btb.apiresult.service;

import com.btb.apiresult.data.ResultDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ResultService {
    ResultDto createResult(ResultDto resultDto);
    ResultDto getResult(String questionResultPK);
    List<ResultDto> listAll();
//    List<ResultDto> listAllByCustomerPK(String customerPK);
//    List<ResultDto> listAllByQuestionPKAndCustomerPK(String QuestionPK, String customerPK);
}
