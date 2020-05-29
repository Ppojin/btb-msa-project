package com.sph.apiqubank.entity;


import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@DynamicUpdate @DynamicInsert
@Getter @Setter
@Table(name = "CATEGORY")
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryPK;
    @Column(unique = true)
    private String categoryName;
}
