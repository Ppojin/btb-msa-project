package com.sph.apiqubank.entity;

import com.sph.apiqubank.entity.Model.QuestionResponseModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<QuestionEntity, String> {
    QuestionEntity findByQuestionPK(String questionId);
    QuestionEntity findByTitle(String title);
    List<QuestionEntity> findAll();
    List<QuestionEntity> findAllByCategoryPK(Integer categoryPK);
    List<QuestionEntity> findAllByGroupName(String groupName);

//    @Query
//    List<QuestionEntity> findAllByCategoryPKAndGroupName();

//    @Query("select * from QUESTION_ENTITY where title like '%searchValue%'")
//    List<QuestionEntity> findQuestionByTitleLike(@Param("searchValue") String searchValue);
}
