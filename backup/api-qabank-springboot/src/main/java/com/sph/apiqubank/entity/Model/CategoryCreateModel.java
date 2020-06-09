package com.sph.apiqubank.entity.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryCreateModel {
    @NotNull(message = "need value")
    private String categoryName;
}
