package com.sph.apiexam.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import java.util.Date;
import java.util.List;

@Data
@Entity @Table(name = "EXAM")
@AllArgsConstructor @NoArgsConstructor
@DynamicInsert @DynamicUpdate
public class ExamEntity {
    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String examPK;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String contents;
    @DecimalMax(value = "5", message = "value must between 1~3")
    @DecimalMin(value = "1", message = "value must between 1~3")
    private Integer examLevel;
    @Column
    private String createdGit;
//    @Column
    @Column(columnDefinition = "varchar(255) default 'default'")
    private String groupName;
    @Column
    private Date startDate;
    @Column
    private Date endDate;

    @Column(nullable = true, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private String createDate;

    @ElementCollection
    private List<String> questionPK;
    @ElementCollection
    private List<String> customerPK;

}
