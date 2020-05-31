package com.btb.apiresult.service;

import com.btb.apiresult.data.ResultDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ResultService {
    ResultDto createResult(ResultDto resultDto);
    List<ResultDto> listAll();
//    List<ResultDto> listAllByCustomerPk(String customerPk);
//    List<ResultDto> listAllByExamPkAndCustomerPk(String examPk, String customerPk);
}
