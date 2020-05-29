package com.sph.apiexam.service;

import com.sph.apiexam.entity.ExamDto;
import com.sph.apiexam.entity.ExamEntity;
import com.sph.apiexam.entity.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface ExamService{
    ExamDto createExam(ExamDto examDto);
    ExamDto readExam(String examPK);
    List<ExamDto> listAll();
    List<ExamDto> listAllByGroupName(String groupName);
}
