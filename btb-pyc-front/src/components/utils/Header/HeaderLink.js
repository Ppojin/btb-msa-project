/*eslint-disable*/
import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Assignment, Today, PeopleAlt, AssignmentLate, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "components/utils/Dropdown/CustomDropdown.js";
import Button from "components/utils/Button/CustomButton.js";
import LoginPage from "components/main/login/LoginPage.js"

//import css
import styles from "assets/jss/components/styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Link to ="/dailycheck" className={classes.navLink}>
                        <Assignment className={classes.icons}/>데일리 체크
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="스킬 체크"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={Assignment}
                        dropdownList={[
                            <Link to="/practice" className={classes.dropdownLink}>
                                연습 문제
                            </Link>,
                            <Link to="/exam" className={classes.dropdownLink}>
                                시험 문제
                            </Link>,
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText="와글와글"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={PeopleAlt}
                        dropdownList={[
                            <Link to="/ranking" className={classes.dropdownLink}>
                                랭킹
                            </Link>,
                            <Link to="/board" className={classes.dropdownLink}>
                                게시판
                            </Link>,
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        dropdownHeader="사용자"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={AccountCircle}
                        dropdownList={[
                            <Link to="/login" className={classes.dropdownLink}>
                                로그인
                            </Link>,
                            <Link to="/signup" className={classes.dropdownLink}>
                                회원 가입
                            </Link>,
                            <Link to="/checkinfo" className={classes.dropdownLink}>
                                내 정보 찾기
                            </Link>,
                        ]}
                    />
                </ListItem>
            </List>
            // <Switch>
            //     <Route path="/skillcheck/login" component={LoginPage}/>
            //     {/* <Route path="/skillcheck/todayQuiz" component={}/>
            //     <Route path="/skillcheck/todayChanllenge" component={}/>
            //     <Route path="/skillcheck/practice" component={}/>
            //     <Route path="/skillcheck/exam" component={}/>
            //     <Route path="/skillcheck/ranking" component={}/>
            //     <Route path="/skillcheck/board" component={}/>
            //     <Route path="/skillcheck/login" component={}/>
            //     
            //     <Route path="/skillcheck/checkinfo" component={}/> */}
            // </Switch>
    );
}