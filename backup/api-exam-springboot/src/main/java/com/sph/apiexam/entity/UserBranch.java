package com.sph.apiexam.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class UserBranch {
    @Id
    private String userBranch;
    @Column
    private String customerPK;
    @Column
    private String examPK;
    @Column
    private String createdBranch;
}
