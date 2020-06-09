import React,{useContext} from 'react';
import {useStore, useSelector} from 'react-redux';

//import @material-ui/
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import {TextField, Checkbox} from '@material-ui/core';
import { Typography } from '@material-ui/core';
//import css
import {login} from '../../../assets/jss/components/main/login.js';
//core component
import Copyright from '../../utils/Footer/Copyright';
import LoginValForm from './LoginValForm';
import {loginValidation} from '../../utils/others/ValidationCheck.js';
import { Redirect, useHistory } from 'react-router';


export default function LogIn() {
  const storedata = useSelector(state => state.user);
  const logged = storedata.isLogged;
  const token = storedata.UserInfo.token;
  const customerpk = storedata.UserInfo.customerpk;
  const classes = login();
  const {
    values,
    loginValErrors,
    loginhandleChange,
    loginhandleSubmit,
  } = LoginValForm(logindatacheck,loginValidation)

  function logindatacheck() {

    console.log("logged :",logged)
    console.log("token : ",token)
    console.log("pk: ",customerpk)

    if(logged === true){
      localStorage.setItem(
          "userInfo",
          JSON.stringify({
              customerpk : customerpk,
              token : token,
              // isLogin : true
          } 
      ))}

    // return function(){
    //   if(logged === true){
    //     localStorage.setItem(
    //         "userInfo",
    //         JSON.stringify({
    //             customerpk : customerpk,
    //             token : token,
    //             // isLogin : true
    //         } 
    //     ))}
    //   }
    }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
          <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form 
            onSubmit={loginhandleSubmit}
            className={classes.form} 
            noValidate> 
              {/* <Totalval/>  */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={loginhandleChange}
                value = {values.email||''}
                id="email"
                label="Email을 입력해 주세요"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {loginValErrors.email && (<p className="help is-danger">{loginValErrors.email}</p>)}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={loginhandleChange}
                value = {values.password||''}
                name="password"
                label="Password를 입력해주세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {loginValErrors.password && (
                <p className="help is-danger">{loginValErrors.password}</p>)}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="내 정보 기억하기"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                로그인하기
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <a href="/changepw" >
                    비밀번호 분실
                  </a>
                </Grid> */}
                <Grid item>
                  <a href="/signup"  variant="body2">
                    계정이 없으신가요? 회원가입 하세요!
                  </a>
                </Grid>
              </Grid>
          </form>
        </div>
          <Box mt={8}>
            <Copyright />
          </Box>
    </Container>
  );
}
