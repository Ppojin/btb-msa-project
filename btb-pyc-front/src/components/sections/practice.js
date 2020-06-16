import React from 'react';
import classNames from "classnames";
import { Link } from 'react-router-dom'
//css
import styles from "assets/jss/components/sections/result.js";
import { makeStyles } from "@material-ui/core/styles";

// core
import HeaderLinks from "components/utils/Header/AuthHeaderLink.js";
import Header from "components/utils/Header/Header.js";
import Parallax from "components/utils/Parallax/Parallax.js";
import GridContainer from "components/utils/Grid/GridContainer2.js";
import GridItem from "components/utils/Grid/GridItem2.js";
import Table from 'components/utils/Table/ExamTable.js'
import Card from 'components/utils/Card/Card.js'
import CardHeader from 'components/utils/Card/CardHeader.js'
import CardFooter from 'components/utils/Card/CardFooter';
import CardBody from 'components/utils/Card/CardBody.js';
import Footer from 'components/utils/Footer/Footer.js'


const useStyles = makeStyles(styles);


export default function Exam(props) {

    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                to="/auth"
                brand="Scouter"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/bg2.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>시험</h1>
                                <h3 className={classes.subtitle}>
                                    시험을 통해 내 개발력을 테스트 해보세요
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <div id="recommendExam">
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Card>
                                        <CardHeader color="primary">
                                            <h4 classname={classes.cardTitle}>추천 시험 목록</h4>
                                            <p color="white">
                                                회원님의 관심사를 바탕으로 제공되는 시험 목록입니다.
                                            </p>
                                        </CardHeader>
                                        <CardBody>
                                            <Table
                                                tableHeaderColor="danger"
                                                tableHead={["No", "문제이름", "관련 기술", "레벨", "현재까지 응시한 인원"]}
                                                tableData={[
                                                    ["1", <Link to="/examdisc" style={{ color: "black" }}>스프링 부트 : api 통신</Link>, "Spring Boot", "3", "12075명"],
                                                    ["2", <Link to="/examdisc" style={{ color: "black" }}>리액트 : 리액트 훅</Link>, "React", "2", "1299명"],
                                                    ["3", <Link to="/examdisc" style={{ color: "black" }}>쿠버네티스 : GCP 배포</Link>, "Kubernetes", "2", "3645명"],
                                                    ["4", <Link to="/examdisc" style={{ color: "black" }}>스프링 클라우드 : security 설정</Link>, "Spring Cloud", "3", "422명"]
                                                ]}
                                            />
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Card>
                                        <CardHeader color="primary">
                                            <h4 classname={classes.cardTitle}>응시 가능 시험 목록</h4>
                                            <p color="white">
                                                회원님께서 응시 할 수 있는 시험 목록입니다
                                            </p>
                                        </CardHeader>
                                        <CardBody>
                                            <Table
                                                tableHeaderColor="danger"
                                                tableHead={["No", "문제이름", "관련 기술", "레벨", "현재까지 응시한 인원"]}
                                                tableData={[
                                                    ["1", <Link to="/examdisc" style={{ color: "black" }}>스프링 부트 : api 통신</Link>, "Spring Boot", "3", "12075명"],
                                                    ["2", <Link to="/examdisc" style={{ color: "black" }}>리액트 : 리액트 훅</Link>, "React", "2", "1299명"],
                                                    ["3", <Link to="/examdisc" style={{ color: "black" }}>쿠버네티스 : GCP 배포</Link>, "Kubernetes", "2", "3645명"],
                                                    ["4", <Link to="/examdisc" style={{ color: "black" }}>스프링 클라우드 : security 설정</Link>, "Spring Cloud", "3", "422명"]
                                                ]}
                                            />
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}