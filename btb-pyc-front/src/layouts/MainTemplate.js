import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
//core component
import MainPage from '../components/utils/Card/OutlinedCard.js'
import LogIn from '../components/main/login/Login.js';
import SignUp from '../components/main/signup/SignUp.js';
import NotFound from '../components/utils/others/Errorpage.js';
//css
import '../assets/css/Maintemplate.css';

const MenuItem =({active,children, to})=>(
    <Link to={to} className="main-menu-item">
        {children}
    </Link>
)

const MainTemplate = () => {
    return(
        <Router>
            <div className="logo">
                <Link to="/main/home">
                    <Button className="logo"
                        href="#outlined-buttons"
                        color="secondary"
                    >Be the Best</Button>
                </Link>
            </div>
            <div className="main-menu">
                <MenuItem
                    to={'/main/login'}
                >로그인
                </MenuItem>
                <MenuItem
                    to={'/main/signup'}
                >회원 가입
                </MenuItem>
            </div>
            <Switch>
                <Route exact path="/main/home" component={MainPage}/>
                <Route path="/main/login" component={LogIn} />
                <Route path="/main/signup" component={SignUp} />
                <Redirect from="/" to="/main/home"/>
                <Route component={NotFound} />
            </Switch>
            
        </Router>
    )
}

export default MainTemplate