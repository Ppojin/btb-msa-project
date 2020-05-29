package com.sph.apiexam.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamRepository extends CrudRepository<ExamEntity, String> {
//public interface ExamRepository extends JpaRepository<ExamEntity, String> {
    ExamEntity findByExamPK (String examPK);
    List<ExamEntity> findAll();
    List<ExamEntity> findAllByGroupName(String groupName);
}
