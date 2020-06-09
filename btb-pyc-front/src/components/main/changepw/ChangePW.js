import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CssBaseline, Avatar, TextField } from '@material-ui/core';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
        BeTheBest All Rights Reserved.
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function ChangePW() {
    function ButtonClick(e){
        e.preventDefault();
        console.log("buttonclick")
        //1. 이메일이 유효한지 검사 진행
    
        //1-1. 이메일이 유효하지 않은 경우 '유효한 이메일이 아닙니다' 메시지 노출
    
        //1-2. 이메일이 유효하면 이메일로 확인코드 발송 및 확인 코드 창 노출
    }

    const classes = useStyles();
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VpnKeyOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    비밀번호 찾기
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="가입하신 emial 주소를 입력해주세요"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={ButtonClick}
                        >
                            보내기
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
