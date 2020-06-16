import React from "react";
import {useDispatch, useSelector} from 'react-redux';
// @material-ui/core components
import InputLabel from "@material-ui/core/InputLabel";

// core components
import {fetchData} from 'shared/reducers/reducers/MyprofileReducer.js'
import GridItem from "../../utils/Grid/GridItem.js";
import GridContainer from "../../utils/Grid/GridContainer.js";
import UserInput from "./UserInput.js";
import UserButton from "../../utils/Button/UserButton.js";
import Card from "../../utils/Card/Card.js";
import CardHeader from "../../utils/Card/CardHeader.js";
import CardAvatar from "../../utils/Card/CardAvatar.js";
import CardBody from "../../utils/Card/CardBody.js";
import CardFooter from "../../utils/Card/CardFooter.js";

import avatar from "../../../assets/img/testAvatarImg.jpg";

//css
import {userprofileStyle} from '../../../assets/jss/components/user/profile.js'


export default function UserProfile() {
    // const [state, testdispatch] =useReducer(rootReducer,initialSate)

    const pk = localStorage.getItem("userInfo")
    const pk_customerpk = JSON.parse(pk).customerpk
    const pk_token = JSON.parse(pk).token
    // dispatch(fetchData(pk_customerpk, pk_token))
    const {isfetched,name, email, phone} = useSelector(state=>({
        isfetched:state.isFetched,
        name:state.Myprofile.userData.name,
        email:state.Myprofile.userData.email,
        phone:state.Myprofile.userData.phone,
    }),[])
    const classes = userprofileStyle();
    const dispatch = useDispatch();
    
    const userDataTest = (e)=>{
    if(e)e.preventDefault();
    console.log("pk_customer : ",pk_customerpk)
    console.log("pk_token : ",pk_token)
    // fetchData(pk_customerpk, pk_token)
    dispatch(fetchData(pk_customerpk, pk_token))
    // console.log("fetchData : ", fetchData(pk_customerpk, pk_token))
    // console.log("dispatch : ",dispatch(fetchData(pk_customerpk, pk_token))) 
}
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>My profile</h4>
                            <p className={classes.cardCategoryWhite}>Complete your profile</p>
                            
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                <button onClick={userDataTest}>내 정보 검색 </button>
                                        <CardHeader>
                                            <h4 >Name : {name}</h4>
                                        </CardHeader>
                                        <hr/>
                                        <CardHeader>
                                            <h4 >email : {email}</h4>
                                        </CardHeader>
                                        <hr/>
                                        <CardHeader>
                                            <h4 >phone : {phone}</h4>
                                        </CardHeader>
                                        <hr/>
                                    {/* <Card>
                                        <CardHeader colo="brown">
                                            <h4 className={classes.cardTitleBrown}>Name</h4>
                                        </CardHeader>
                                        
                                        <CardBody>
                                            <GridContainer>
                                                
                                            </GridContainer>
                                        </CardBody>
                                    </Card> */}
                                    
                                    {/* <UserInput
                                        labelText="Username"
                                        id="username"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    /> */}
                                </GridItem>
                                {/* <GridItem xs={12} sm={8} md={8}>
                                    <UserInput
                                        labelText="Email address"
                                        id="email-address"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem> */}
                            </GridContainer>
                            {/* <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <UserInput
                                        labelText="01x-xxxx-xxxx"
                                        id="phoneNo"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer> */}
                            <br/>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>{"<"}About me{">"}</InputLabel>
                                    <UserInput
                                        labelText="나 자신을 자유롭게 표현해 보세요"
                                        id="about-me"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 3
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <UserButton color="primary">회원 정보 수정</UserButton>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={avatar} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>Your AVATAR</h6>
                            <h4 className={classes.cardTitle}>{name}님</h4>
                            <p className={classes.description}>
                                My avatar description is here
                            </p>
                            <UserButton color="primary" round>
                                내 아바타 변경
                            </UserButton>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
