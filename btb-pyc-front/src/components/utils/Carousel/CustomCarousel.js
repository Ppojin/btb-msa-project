import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/utils/Grid/GridContainer2.js";
import GridItem from "components/utils/Grid/GridItem2.js";
import Card2 from "components/utils/Card/Card2.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/components/utils/carousel/carousel.js";

const useStyles = makeStyles(styles);

export default function CustomCarousel() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                        <Card2 carousel>
                            <Carousel {...settings}>
                                <div>
                                    <img src={image1} alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            SpringBoot
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image2}
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            React
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img src={image3} alt="Third slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Kubernetes
                                        </h4>
                                    </div>
                                </div>
                            </Carousel>
                        </Card2>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
