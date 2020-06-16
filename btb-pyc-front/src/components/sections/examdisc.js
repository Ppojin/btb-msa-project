import React, { useState } from 'react';
import classNames from "classnames";
import { Link } from 'react-router-dom'


import styles from "assets/jss/components/sections/result.js";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from 'assets/jss/components/styles/ExpansionPanelStyle.js'
import ExpansionPanelSummary from 'assets/jss/components/styles/ExpansionPanelSummaryStyle.js'
import ExpansionPanelDetails from 'assets/jss/components/styles/ExpansionPanelDetailsStyle.js'


import HeaderLinks from "components/utils/Header/AuthHeaderLink.js";
import Header from "components/utils/Header/Header.js";
import Parallax from "components/utils/Parallax/Parallax.js";
import GridContainer from "components/utils/Grid/GridContainer2.js";
import GridItem from "components/utils/Grid/GridItem2.js";
import Footer from 'components/utils/Footer/Footer.js'
import NavPills from 'components/utils/NavPills/NavPills.js'


import Typography from '@material-ui/core/Typography';
import Schedule from '@material-ui/icons/Schedule';
import {MdLiveHelp} from 'react-icons/md/index.js';
import {BsCode} from 'react-icons/bs/index.js'
import {GrTask} from 'react-icons/gr/index.js'
import { Button } from '@material-ui/core';
import {FaRegCopy} from 'react-icons/fa/index.js'
import {GrDocumentZip} from 'react-icons/gr/index.js'

const useStyles = makeStyles(styles);

export default function ExamDisc(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [expanded, setExpanded] = useState()
    const panel_handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

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
            <Parallax image={require("assets/img/bg7.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>시험 내용</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <GridItem xs={12} sm={12} md={12} lg={12}>
                            <NavPills
                                color="primary"
                                tabs={[
                                    {
                                        tabButton: "Information",
                                        tabIcon: MdLiveHelp,
                                        tabContent: (
                                            <span>
                                                <p>문제 풀이 방법</p> 
                                                <hr/>
                                                <div fontSize="4">
                                                    step1. 소스를 다운로드 받으세요
                                                    <br />
                                                    <br />
                                                    step2. 문제 평가 기준에 맞춰 로컬 환경에서 문제를 푸세요
                                                    <br />
                                                    <br />
                                                    step3. 푼 문제의 소스를 제공받은 git 주소로 올려주세요
                                                    <br />
                                                    <br />
                                                    step4. 제출 버튼을 눌러 결과를 확인하세요
                                                    <br />
                                                    <br />
                                                </div>
                                                <br />
                                                <p>git 주소로 문제를 제공받는 방법</p> 
                                                <hr/>
                                                <div>
                                                    step1. git을 설치해 주세요
                                                    <br />
                                                    step2. 원하시는 파일 경로로 이동해 주세요
                                                    <br />
                                                    step3. "cmd" or "git bash" 명령어를 통해 터미널 창을 열어주세요
                                                    <br />
                                                    step4. "git clone 소스코드_주소" 를 입력해 소스를 다운받으세요
                                                    <br />
                                                </div>
                                                <br />
                                                <p>문제를 제출하는 방법</p> 
                                                <hr/>
                                                <div>
                                                    step1. 제출할 파일이 있는 경로의 상단으로 이동해 주세요
                                                    <br />
                                                    step2. 터미널을 열고 "git push" 명령어를 입력해주세요
                                                    <br />
                                                </div>
                                            </span>
                                        )
                                    },
                                    {
                                        tabButton: "소스 코드",
                                        tabIcon: BsCode,
                                        tabContent: (
                                            <span>
                                                <h4>1. Git Clone</h4>
                                                <p>
                                                    http://gitlab.scouter.com/exam-123441{"  "}<FaRegCopy/>
                                                </p>
                                                <br />
                                                <hr />
                                                <br />
                                                <h4>2. zip download</h4>
                                                <p>
                                                    zip 파일로 다운로드 <GrDocumentZip/>
                                                </p>
                                            </span>
                                        )
                                    },
                                    {
                                        tabButton: "문제",
                                        tabIcon: GrTask,
                                        tabContent: (
                                            <div>
                                                <ExpansionPanel square expanded={expanded === 'examdisc1'} onChange={panel_handleChange('examdisc1')}>
                                                    <ExpansionPanelSummary id="examdisc1-header">
                                                        <Typography>Q1.</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            <p>목표</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>채점 기준</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>주의 사항</p>
                                                            <hr/>
                                                            <br/>
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <br/>
                                                <ExpansionPanel square expanded={expanded === 'examdisc2'} onChange={panel_handleChange('examdisc2')}>
                                                    <ExpansionPanelSummary id="examdisc2-header">
                                                        <Typography>Q2.</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            <p>목표</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>채점 기준</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>주의 사항</p>
                                                            <hr/>
                                                            <br/>
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <br/>
                                                <ExpansionPanel square expanded={expanded === 'examdisc3'} onChange={panel_handleChange('examdisc3')}>
                                                    <ExpansionPanelSummary id="examdisc3-header">
                                                        <Typography>Q3.</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            <p>목표</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>채점 기준</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>주의 사항</p>
                                                            <hr/>
                                                            <br/>
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <br/>
                                                <ExpansionPanel square expanded={expanded === 'examdisc4'} onChange={panel_handleChange('examdisc4')}>
                                                    <ExpansionPanelSummary id="examdisc4-header">
                                                        <Typography>Q4.</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            <p>목표</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>채점 기준</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>주의 사항</p>
                                                            <hr/>
                                                            <br/>
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                                <br/>
                                                <ExpansionPanel square expanded={expanded === 'examdisc5'} onChange={panel_handleChange('examdisc5')}>
                                                    <ExpansionPanelSummary id="examdisc1-header">
                                                        <Typography>Q5.</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography>
                                                            <p>목표</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>채점 기준</p>
                                                            <hr/>
                                                            <br/>
                                                            <p>주의 사항</p>
                                                            <hr/>
                                                            <br/>
                                                        </Typography>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            </div>
                                        )
                                    },
                                ]}
                                Link={
                                    {

                                    }
                                }
                            />
                        </GridItem>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div style={{
                        fontSize:40,
                        textAlign: 'center',
                    }}>
                            <Link to="/result" > 
                                <Button>
                                    제출하기 
                                </Button>
                            </Link>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}