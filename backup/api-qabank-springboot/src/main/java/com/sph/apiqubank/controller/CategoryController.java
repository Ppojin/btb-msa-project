package com.sph.apiqubank.controller;

import com.sph.apiqubank.entity.CategoryEntity;
import com.sph.apiqubank.entity.CategoryRepository;
import com.sph.apiqubank.entity.Model.CategoryCreateModel;
import com.sph.apiqubank.entity.Model.CategoryResponseModel;
import com.sph.apiqubank.entity.QuestionRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping("v1/categories")
public class CategoryController {
    @Autowired
    Environment env;

    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    CategoryRepository categoryRepository;

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<CategoryResponseModel> createCategory(@RequestBody @Valid CategoryCreateModel categoryCreateModel){
        ModelMapper modelMapper = new ModelMapper();
        CategoryEntity categoryEntity = modelMapper.map(categoryCreateModel, CategoryEntity.class);
        CategoryEntity savedCategoryEntity = categoryRepository.save(categoryEntity);
        CategoryResponseModel categoryResponseModel = modelMapper.map(savedCategoryEntity, CategoryResponseModel.class);
        return ResponseEntity.status(HttpStatus.OK).body(categoryResponseModel);
    }

    @GetMapping
    public ResponseEntity<List<CategoryResponseModel>> listAllCategories(){
        ModelMapper modelMapper = new ModelMapper();
        List<CategoryEntity> categoryEntityList = categoryRepository.findAll();
        Type categoryDtoListType = new TypeToken<List<CategoryResponseModel>>(){}.getType();
        List<CategoryResponseModel> categoryResponseModelList = modelMapper.map(categoryEntityList, categoryDtoListType);
        return ResponseEntity.status(HttpStatus.OK).body(categoryResponseModelList);
    }
}
