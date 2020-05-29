package com.sph.apiqubank.entity;

import com.sph.apiqubank.entity.Model.CategoryCreateModel;
import com.sph.apiqubank.entity.Model.QuestionCreateModel;
import org.aspectj.lang.annotation.After;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.annotation.AfterTestMethod;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuestionRepositoryTest {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    CategoryRepository categoryRepository;

    static String categoryNmaeDummy = "Srping_Boot";

    static String questionTitleDummy = "question title";
    static String questionContentsDummy = "question contents";
    static String questionGitUrlDummy = "http://github.com/ppojin/someting.git";
    static String questionGroupNameDummy = "Default";

    static CategoryEntity createdCategoryEntity;
    static QuestionEntity createdQuestionEntity;

    @BeforeEach
    void before() {
        ModelMapper modelMapper = new ModelMapper();
        CategoryCreateModel categoryCreateModel = new CategoryCreateModel(categoryNmaeDummy);
        CategoryEntity categoryEntity = modelMapper.map(categoryCreateModel, CategoryEntity.class);
        categoryRepository.save(categoryEntity);
        CategoryEntity createdCategoryEntity = categoryRepository.findByCategoryName(this.categoryNmaeDummy);
        Long createdCategoryPK = createdCategoryEntity.getCategoryPK();
        this.createdCategoryEntity = createdCategoryEntity;

        List<Long> categoryList = new ArrayList<>();
        categoryList.add(createdCategoryPK);
        QuestionCreateModel questionCreateModel = new QuestionCreateModel();
        questionCreateModel.setCategoryPK(categoryList);
        questionCreateModel.setTitle(this.questionTitleDummy);
        questionCreateModel.setContents(this.questionContentsDummy);
        questionCreateModel.setGitUrl(this.questionGitUrlDummy);
        questionCreateModel.setGroupName(this.questionGroupNameDummy);
        QuestionEntity questionEntity = modelMapper.map(questionCreateModel, QuestionEntity.class);
        QuestionEntity createdQuestionEntity = questionRepository.save(questionEntity);
        this.createdQuestionEntity = createdQuestionEntity;
    }

    @Test
    void findByQuestionPK() {
        QuestionEntity loadedQuestionEntity = questionRepository.findByQuestionPK(this.createdQuestionEntity.getQuestionPK());
        assertEquals(this.createdQuestionEntity, loadedQuestionEntity);
    }

    @Test
    void findByTitle() {
    }

    @Test
    void findAllByCategories() {
    }

    @Test
    void findAllByGroupName() {
    }

    @Test
    void findQuestionByTitleLike() {
    }
}