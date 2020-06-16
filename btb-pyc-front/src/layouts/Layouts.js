import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
// import Carousel from "react-slick"
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import HomeBasics from "components/sections/HomeBasics.js"

import Footer from "components/utils/Footer/Footer.js";
import GridContainer from "components/utils/Grid/GridContainer2.js";
import GridItem from "components/utils/Grid/GridItem2.js";
// import Button from "components/utils/Button/CustomButton.js";
import Parallax from "components/utils/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/utils/Header/HeaderLink.js";
import Header from "components/utils/Header/Header.js";
import styles from "assets/jss/layouts/BTBlayouts.js";
//import utils



//import image

//routes

const useStyles = makeStyles(styles);

export default function Layouts(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }
    return (
        <div>
            <Header
                brand="Scouter"
                to={"/scouter"}
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/BTBHomeImg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Scouter</h1>
                                <h3 className={classes.subtitle}>
                                    당신의 개발 능력을 평가해 보세요! 
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                {/* <HomeBasics /> */}

            </div>
            <Footer />
        </div>
    );
}
