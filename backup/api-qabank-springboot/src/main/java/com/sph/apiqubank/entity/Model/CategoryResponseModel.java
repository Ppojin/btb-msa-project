package com.sph.apiqubank.entity.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponseModel {
    private Long categoryPK;
    private String categoryName;
}
