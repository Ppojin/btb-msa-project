package com.btb.apiresult.data;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@Entity
@Table(name = "TESTCASERESULT")
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class TestCaseResultEntity {
    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String testCasePk;
    @NotNull
    @Column
    private String examResultPk;
    @NotNull
    @Column
    private String testCaseMethod;
    @NotNull
    @Column
    private Boolean earned;
}
