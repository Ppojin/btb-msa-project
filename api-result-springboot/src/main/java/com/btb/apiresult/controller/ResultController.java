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

import java.io.*;
import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/result")
public class ResultController {
    ResultService resultService;
    @Autowired
    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<QuestionResultResponseModel> createResult(@RequestBody QuestionResultCreateModel questionResultCreateModel){
        ModelMapper modelMapper = new ModelMapper();
        //====================================mapping
//        ResultDto resultDto = modelMapper.map(questionResultCreateModel, ResultDto.class);
        ResultDto resultDto = new ResultDto();
        resultDto.setQuestionPK(questionResultCreateModel.getQuestionPK());
        resultDto.setGroupName(questionResultCreateModel.getGroupName());
        resultDto.setCustomerPK(questionResultCreateModel.getCustomerPK());
        resultDto.setGitUrl(questionResultCreateModel.getGitUrl());
        resultDto.setTestCaseResultCreateList(questionResultCreateModel.getTestCaseResultCreateList());
        //==========================================

        ResultDto resultServiceResult = resultService.createResult(resultDto);
        QuestionResultResponseModel questionResultResponseModel = modelMapper.map(resultServiceResult, QuestionResultResponseModel.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(questionResultResponseModel);
    }

    @GetMapping("{questionResultPK}")
    public ResponseEntity<QuestionResultResponseModel> getResult(@PathVariable("questionResultPK") String questionResultPK){
        ModelMapper modelMapper = new ModelMapper();
        ResultDto resultDto = resultService.getResult(questionResultPK);
        QuestionResultResponseModel questionResultResponseModel = modelMapper.map(resultDto, QuestionResultResponseModel.class);
        return ResponseEntity.status(HttpStatus.OK).body(questionResultResponseModel);
    }

    class StreamGobbler extends Thread {
        InputStream is;
        String type;
        OutputStream os;

        StreamGobbler(InputStream is, String type) {
            this(is, type, null);
        }
        StreamGobbler(InputStream is, String type, OutputStream redirect) {
            this.is = is;
            this.type = type;
            this.os = redirect;
        }

        public void run() {
            try {
                PrintWriter pw = null;
                if (os != null)
                    pw = new PrintWriter(os);

                InputStreamReader isr = new InputStreamReader(is);
                BufferedReader br = new BufferedReader(isr);
                String line=null;
                while ( (line = br.readLine()) != null) {
                    if (pw != null)
                        pw.println(line);
                    System.out.println(type + ">" + line);
                }
                if (pw != null)
                    pw.flush();
            } catch (IOException ioe) {
                ioe.printStackTrace();
            }
        }
    }
    @GetMapping("{questionResultPK}/{customerPK}/done")
    public ResponseEntity<QuestionResultResponseModel> doneQuestion(
            @PathVariable("questionResultPK") String questionResultPK,
            @PathVariable("customerPK") String customerPK
    ){
//        String dockerRunCommand = "docker run --name "+questionResultPK+" -v /.m2:/var/maven/.m2 -e MAVEN_CONFIG=/var/maven/.m2 -e USER=qwer -e REPO="+questionResultPK+" ppojin/tester";
        String dockerRunCommand = "docker run --name "+questionResultPK+" -e MAVEN_CONFIG=/var/maven/.m2 -e USER=qwer -e REPO=0963e10c-780e-4546-a12b-730378712459 ppojin/tester";
        String dockerRemoveCommand = "docker rm -f "+questionResultPK;
        System.out.println(dockerRunCommand);

        try {
            Runtime rt = Runtime.getRuntime();
            Process proc = rt.exec(dockerRunCommand);
            // any error message?
            StreamGobbler errorGobbler = new StreamGobbler(proc.getErrorStream(), "ERROR");

            // any output?
            StreamGobbler outputGobbler = new StreamGobbler(proc.getInputStream(), "OUTPUT");

            // kick them off
            errorGobbler.start();
            outputGobbler.start();

            // any error???
            int exitVal = proc.waitFor();
            System.out.println("ExitValue: " + exitVal);
        } catch (Throwable t) {
            t.printStackTrace();
        }

        return ResponseEntity.status(HttpStatus.OK).body(null);
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
            resultDtoList = resultService.listAll().stream().filter(
                resultDto -> resultDto.getCustomerPK().equals(customerPK) && resultDto.getQuestionPK().equals(questionPK)
            ).collect(Collectors.toList()
            );
        } else if (customerPK != null){
            resultDtoList = resultService.listAll().stream().filter(
                resultDto ->resultDto.getCustomerPK().equals(customerPK)
            ).collect(Collectors.toList());
        } else if (questionPK != null){
            resultDtoList = resultService.listAll().stream().filter(
                resultDto ->resultDto.getQuestionPK().equals(questionPK)
            ).collect(Collectors.toList());
        } else {
            resultDtoList = resultService.listAll();
        }
        List<QuestionResultResponseModel> questionResultResponseModelList = modelMapper.map(resultDtoList, resultResponseModelListType);
        return ResponseEntity.status(HttpStatus.OK).body(questionResultResponseModelList);
    }
}
