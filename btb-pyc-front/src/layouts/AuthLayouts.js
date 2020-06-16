import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Carousel from "react-slick"
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import HomeBasics from "components/sections/HomeBasics.js"
import Header from "components/utils/Header/Header.js";
import Footer from "components/utils/Footer/Footer.js";
import GridContainer from "components/utils/Grid/GridContainer2.js";
import GridItem from "components/utils/Grid/GridItem2.js";
// import Button from "components/utils/Button/CustomButton.js";
import Parallax from "components/utils/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/utils/Header/AuthHeaderLink.js";

import styles from "assets/jss/layouts/BTBlayouts.js";
import Card from "components/utils/Card/Card2";


//import image
import springbootImg from "assets/img/springboot.png"
import reactImg from "assets/img/react.jpg"
import kubeImg from "assets/img/k8s.png"

//routes

const useStyles = makeStyles(styles);

export default function AuthLayouts(props) {
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
                to={"/auth"}
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
                                    당신의 개발력을 측정해 보세요!
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
