package com.sph.apiqubank.client;

import com.sph.apiqubank.entity.feignmodel.QuestionResultCreateModel;
import com.sph.apiqubank.entity.feignmodel.QuestionResultResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

//@FeignClient(value="gitlab", url="http://gitlab.ppojin.com/api/v4")
//public interface GitlabClient {
//    @PostMapping("projects/{projectId}/fork")
//    ForkResponseModel forkQuestion(
//            @RequestBody ForkRequestModel forkRequestModel,
//            @PathVariable(value = "projectId") Integer projectId,
//            @RequestParam("access_token") String token
//    );
//}

@FeignClient(name="api-result")
public interface ResultClient {
    @PostMapping(value="/v1/result", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    ResponseEntity<QuestionResultResponseModel> createResult(@RequestBody QuestionResultCreateModel QuestionResultCreateModel);
}
