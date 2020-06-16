import React from 'react';
import { Link } from 'react-router-dom'
import classNames from "classnames";
import ChartistGraph from "react-chartist";
// react-icons
import { FaMedal } from "react-icons/fa/index.js"
import { AiOutlinePlusSquare } from "react-icons/ai/index.js"
// @material-ui/icons
import EqualizerIcon from '@material-ui/icons/Equalizer';

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
//core component
import Footer from 'components/utils/Footer/Footer.js'
import Table from 'components/utils/Table/ExamTable.js'
import { dailySalesChart } from "components/utils/Chart/Charts.js"
import CustomTabs from 'components/utils/Tabs/CustomTabs';
import Parallax from "components/utils/Parallax/Parallax.js";
import GridContainer from "components/utils/Grid/GridContainer2.js";
import GridItem from "components/utils/Grid/GridItem2.js";
import Card from 'components/utils/Card/Card.js'
import CardIcon from 'components/utils/Card/CardIcon.js'
import CardHeader from 'components/utils/Card/CardHeader.js'
import CardFooter from 'components/utils/Card/CardFooter';
import CardBody from 'components/utils/Card/CardBody.js';
import HeaderLinks from "components/utils/Header/AuthHeaderLink.js";
import Header from "components/utils/Header/Header.js";
//css style
import styles from "assets/jss/components/sections/result.js";
import { Button } from '@material-ui/core';


const useStyles = makeStyles(styles);

export default function Result(props) {
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
                                <h1 className={classes.title}>나의 업적</h1>
                                <h3 className={classes.subtitle}>
                                    내가 획득한 업적 점수를 확인해 보세요
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <div id="resultTabs">
                            {/* <h3><EqualizerIcon size="24" />{'  \t  '} 업적 획득 창</h3> */}
                            <br /><br /><br />
                            <GridContainer>
                                <GridItem xs={12} sm={6} md={6}>
                                    <Card>
                                        <CardHeader color="danger" stats icon>
                                            <CardIcon color="info">
                                                <EqualizerIcon />
                                            </CardIcon>
                                            <p className={classes.cardCategory}>획득한 업적 점수</p>
                                            <h3 className={classes.cardTitle}>132</h3>
                                        </CardHeader>
                                        <CardFooter stats>
                                            <Button>
                                                <AiOutlinePlusSquare />
                                                살펴보기
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <Card>
                                        <CardHeader color="danger" stats icon>
                                            <CardIcon color="success">
                                                <FaMedal />
                                            </CardIcon>
                                            <p className={classes.cardCategory}>획득한 메달 수</p>
                                            <h3 className={classes.cardTitle}>22개</h3>
                                        </CardHeader>
                                        <CardFooter stats>
                                            <Button size="small">
                                                <AiOutlinePlusSquare />
                                                살펴보기
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Card chart>
                                        <CardHeader color="success">
                                            <ChartistGraph
                                                className="ct-chart"
                                                data={dailySalesChart.data}
                                                type="Line"
                                                options={dailySalesChart.options}
                                                listener={dailySalesChart.animation}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <h4 className={classes.cardTitle}>일일 업적 점수 획득표</h4>
                                            <p className={classes.cardCategory}>
                                                해당 기간 동안
                                            {" "}
                                                <span className={classes.successText}>
                                                    132점
                                            </span>{" "}
                                            을 획득하셨습니다.
                                        </p>
                                        </CardBody>
                                        <CardFooter chart>
                                            <Button size="small">
                                                <AiOutlinePlusSquare size="20" /> 살펴보기
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <br /><br /><br />
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomTabs
                                        plainTabs
                                        headerColor="primary"
                                        tabs={[
                                            {
                                                tabName: "데일리 체크",
                                                tabContent: (
                                                    <Table
                                                    tableHeaderColor="danger"
                                                    tableHead={["날짜", "제목", "결과","정답률"]}
                                                    tableData={[
                                                        ["06.08 월", <Link style={{color:"black"}}>0608 Daily check</Link>, "정답", "72%"],
                                                        ["06.09 화", <Link style={{color:"black"}}>0609 Daily check</Link>, "정답", "93%"],
                                                        ["06.10 수", <Link style={{color:"black"}}>0610 Daily check</Link>, "오답", "32%"],
                                                        ["06.11 목", <Link style={{color:"black"}}>0611 Daily check</Link>, "정답", "67%"],
                                                        ["06.12 금", <Link style={{color:"black"}}>0612 Daily check</Link>, "정답", "87%"],
                                                        ["06.13 토", <Link style={{color:"black"}}>0613 Daily check</Link>, "오답", "48%"],
                                                        ["06.14 일", <Link style={{color:"black"}}>0614 Daily check</Link>, "정답", "80%"]
                                                    ]}
                                                />
                                                )
                                            },
                                            {
                                                tabName: "연습 문제 결과",
                                                tabContent: (
                                                    <Table
                                                        tableHeaderColor="danger"
                                                        tableHead={["코드번호", "문제이름", "관련 기술", "레벨", "결과"]}
                                                        tableData={[
                                                            ["pr1155262", <Link style={{ color: "black" }}>스프링 부트 : 함수 채워넣기</Link>, "Spring Boot", "1", "5/5"],
                                                            ["pr1255162", <Link style={{ color: "black" }}>리액트 : 동적 라우터 구성</Link>, "React", "1", "4/5"],
                                                            ["pr1877445", <Link style={{ color: "black" }}>쿠버네티스 : 노드 간 통신</Link>, "Kubernetes", "2", "4/5"],
                                                        ]}
                                                    />
                                                )
                                            },
                                            {
                                                tabName: "시험 문제 결과",
                                                tabContent: (
                                                    <Table
                                                        tableHeaderColor="danger"
                                                        tableHead={["코드번호", "문제이름", "관련 기술", "레벨", "결과"]}
                                                        tableData={[
                                                            ["ex654512", <Link style={{ color: "black" }}>스프링 부트 : api 통신</Link>, "Spring Boot", "3", "18/20"],
                                                            ["pr354786", <Link style={{ color: "black" }}>리액트 : 리액트 훅</Link>, "React", "2", "20/20"],
                                                            ["pr998425", <Link style={{ color: "black" }}>쿠버네티스 : GCP 배포</Link>, "Kubernetes", "2", "17/20"],
                                                            ["pr660578", <Link style={{ color: "black" }}>스프링 클라우드 : security 설정</Link>, "Spring Cloud", "4", "15/20"]
                                                        ]}
                                                    />
                                                )
                                            }
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}