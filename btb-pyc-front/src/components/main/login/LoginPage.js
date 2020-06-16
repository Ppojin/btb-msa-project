import React, { useState } from 'react';


//import @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from "@material-ui/core/Icon";
//import @material-ui/icons
import Github from "@material-ui/icons/GitHub"
import Facebook from "@material-ui/icons/Facebook.js"
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock"
//import core components
import Header from "components/utils/Header/Header.js"
import HeaderLinks from "components/utils/Header/HeaderLink.js"
import Footer from "components/utils/Footer/Footer.js"
import GridContainer from "components/utils/Grid/GridContainer2.js"
import GridItem from "components/utils/Grid/GridItem2.js"
import Button from "components/utils/Button/CustomButton.js"
import Card from "components/utils/Card/Card2.js";
import CardBody from "components/utils/Card/CardBody2.js";
import CardHeader from "components/utils/Card/CardHeader2.js";
import CardFooter from "components/utils/Card/CardFooter2.js";
import CustomInput from "components/utils/Input/CustomInput.js";
//import css style
import styles from "assets/jss/components/main/LoginPage.js";

//images
import loginimg from "assets/img/testAvatarImg.jpg";

const useStyles = makeStyles(styles)


export default function LoginPage(props) {
    const [loginAnimation, setLoginAnimation] = useState("hidden")
    setTimeout(function () {
        setLoginAnimation("");
    }, 700)
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="Skill check"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + loginimg + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[loginAnimation]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>로그인</h4>
                                    </CardHeader>
                                    
                                    <CardBody>
                                        <CustomInput
                                            labelText="Email..."
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Lock 
                                                            className={classes.inputIconsColor}
                                                            // buttonIcon={Lock}
                                                        >
                                                            
                                                        </Lock>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple color="primary" size="lg">
                                            로그인 하기
                                        </Button>
                                        <Button simple color="primary" size="lg">
                                            회원가입 하기
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
        // <Header/>
    )
}