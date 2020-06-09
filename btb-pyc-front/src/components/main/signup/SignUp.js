import React from 'react';
//import @material-ui/
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


//validation check
import {signupValidation}   from '../../utils/others/ValidationCheck.js';
import SignupValForm from './SignupValForm.js';
import Copyright from '../../utils/Footer/Copyright.js';

//import css
import signupStyle from 'assets/jss/components/styles/signupStyle.js'


export default function SignUp() {

  const classes = signupStyle();
  const {
    values,
    signupValErrors,
    signuphandleChange,
    signuphandleCheck,
    
  } = SignupValForm(siginupsuccess, signupValidation)

  function siginupsuccess(){
    console.log('Sign-up success');
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원 가입
        </Typography>
        <form 
          onSubmit={signuphandleCheck}
          className={classes.form} 
          noValidate>
          <Grid item container spacing={2} xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                xs={12}
                name="name"
                variant="outlined"
                required
                fullWidth
                onChange={signuphandleChange}
                value = {values.name||''}
                id="name"
                label="이름을 입력하세요"
                autoFocus
                autoComplete="name"
              />
                {signupValErrors.name && (<p className="help is-danger">{signupValErrors.name}</p>)}
            </Grid>
      
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                xs={12}
                variant="outlined"
                required
                fullWidth
                onChange={signuphandleChange}
                value = {values.email||''}
                id="email"
                label="Email 주소를 입력하세요"
                name="email"
                autoComplete="email"
              />
              {signupValErrors.email && (<p className="help is-danger">{signupValErrors.email}</p>)}
            </Grid>
            {/* <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="setGender">성별 *</InputLabel>
                <Select
                  labelId="setGender"
                  id="setGender"
                  onChange={signuphandleChange}
                  value={values.gender||''}
                >
                  <MenuItem value={1}>남성</MenuItem>
                  <MenuItem value={2}>여성</MenuItem>
                  <MenuItem value={3}>others</MenuItem>
                </Select>
                {signupValErrors.gender && (<p className="help is-danger">{signupValErrors.gender}</p>)}
              </FormControl>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                xs={8}
                variant="outlined"
                required
                fullWidth
                onChange={signuphandleChange}
                value = {values.phone||''}
                name="phone"
                label="핸드폰 번호를 입력하세요"
                type="tel"
                id="phone"
              />
                {signupValErrors.phone && (<p className="help is-danger">{signupValErrors.phone}</p>)}
            </Grid>
            <Grid item xs={12}>
              <TextField
                xs={8}
                variant="outlined"
                required
                fullWidth
                onChange={signuphandleChange}
                value = {values.password||''}
                name="password"
                label="Password를 입력하세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {signupValErrors.password && (<p className="help is-danger">{signupValErrors.password}</p>)}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value={values.check||''} color="primary" />}
                label="정보제공에 동의합니다"
                onChange={signuphandleChange}
                required
              />
                {signupValErrors.check && (<p className="help is-danger">{signupValErrors.check}</p>)}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            회원 가입하기
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/main/login" variant="body2">
                계정이 있으신가요? 로그인 하세요!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
