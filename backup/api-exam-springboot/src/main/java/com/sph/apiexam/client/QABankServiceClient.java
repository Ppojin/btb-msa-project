package com.sph.apiexam.client;

import com.sph.apiexam.entity.model.QuestionResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpServletRequest;

@FeignClient(name = "api-qabank")//, fallback = QABankFallback.class)
public interface QABankServiceClient {
    @GetMapping("/v1/questions/{questionPK}")
    ResponseEntity<QuestionResponseModel> readQuestion(@PathVariable String questionPK);
}

//@Component
//class QABankFallback implements QABankServiceClient {
//    @Override
//    public ResponseEntity<QuestionResponseModel> readQuestion(String questionPK) {
//        return null;
//    }
//}
