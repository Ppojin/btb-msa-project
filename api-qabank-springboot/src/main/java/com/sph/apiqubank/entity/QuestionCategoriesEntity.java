package com.sph.apiqubank.entity;


import javax.persistence.*;

@Entity
public class QuestionCategoriesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer questionCategoriesPK;
    @Column
    private String category;
}
