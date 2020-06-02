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
@Table(name = "RESULT")
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ResultEntity {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String examResultPK;
    @NotNull
    @Column
    private String examPK;
    @NotNull
    @Column
    private String customerPK;
    @NotNull
    @Column(columnDefinition="varchar(255) default 'default'")
    private String groupName;
    @Column(nullable = true, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private String createDate;
}
