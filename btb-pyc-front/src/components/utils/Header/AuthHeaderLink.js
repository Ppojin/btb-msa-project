/*eslint-disable*/
import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

// @material-ui/icons
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Assignment, PeopleAlt } from "@material-ui/icons";
// react-icons
import {FaUser} from 'react-icons/fa'
// core components
import CustomDropdown from "components/utils/Dropdown/CustomDropdown.js";

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
                        buttonText="계정 관리"
                        dropdownHeader="박예찬 님"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={PersonRoundedIcon}
                        dropdownList={[
                            <Link to="/myprofile" className={classes.dropdownLink}>
                                내 정보
                            </Link>,
                            <Link to="/result" className={classes.dropdownLink}>
                                내 업적
                            </Link>,
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Link to ="/scouter" className={classes.navLink}>
                        <ExitToAppRoundedIcon className={classes.icons}/>로그 아웃
                    </Link>
                </ListItem>
            </List>
    );
}