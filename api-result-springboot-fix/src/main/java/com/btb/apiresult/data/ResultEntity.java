package com.btb.apiresult.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@Entity
@Table(name = "RESULT")
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ResultEntity {
    @Id
//    @GeneratedValue(generator="system-uuid")
//    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String questionResultPK;
    @NotNull(message = "questionPK 가 없습니다")
    @Column
    private String questionPK;
    @NotNull(message = "customerPK 가 없습니다")
    @Column
    private String customerPK;
    @NotNull(message = "groupName 가 없습니다")
    @Column(columnDefinition="varchar(255) default 'default'")
    private String groupName;
    @NotNull(message = "gitUrl 가 없습니다")
    @Column
    private String gitUrl;
    @Column(nullable = true, columnDefinition = "int(2) DEFAULT 0")
    private Integer done;
    @Column(nullable = true)
    private Integer doneDate;
    @Column(nullable = true, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date createDate;
}
