package com.sph.apiqubank.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@DynamicUpdate @DynamicInsert
@Getter @Setter
@Table(name = "QUESTION")
public class QuestionEntity {
    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String questionPK;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false, columnDefinition = "text")
    private String contents;
    @Column(nullable = false)
    private String gitUrl;
    @Column(nullable = false, columnDefinition = "varchar(255) DEFAULT 'default'")
    private String groupName;
    @Column(nullable = true, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private String createDate;

    @ElementCollection
    private List<Long> categoryPK;
    @ElementCollection
    private List<String> testMethod;
}
