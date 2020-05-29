package com.sph.apiqubank.entity;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryRepository extends CrudRepository<CategoryEntity, Long> {
    CategoryEntity findByCategoryPK(Long categoryPK);
    CategoryEntity findByCategoryName(String categoryName);
    List<CategoryEntity> findAll();
}
