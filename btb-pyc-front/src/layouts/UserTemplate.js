//react 
import React from 'react';
import { Link, Route, Switch, Redirect} from 'react-router-dom'; 
//component
import Copyright from '../components/utils/Footer/Copyright.js';
import UserRoutes from '../Routes/UserRoutes.js'
//import utils
import clsx from 'clsx';
//css
import usertemplate from '../assets/jss/layouts/usertemplate.js'
import userDashboardStyle from '../assets/jss/components/styles/userDashboardStyle.js';
//import @material-ui/
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Typography } from '@material-ui/core';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart'
import { ChromeReaderMode } from '@material-ui/icons';

//Routes

const switchRoutes = (
    <Switch>
        {UserRoutes.map((prop, key)=>{
            if(prop.layout === "/user"){
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component = {prop.component}
                        key={key}
                    />
                );
            }
            return null;

        })}
        <Redirect from="/user" to ="/user/profile"/>
    </Switch>

)

const UserListItem = (
    <div>
        <ListItem 
            // onClick={handleMyprofileBtn}
            component={Link} to="/user/profile"
            button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="My profile"/>
        </ListItem>
        <ListItem 
            // onClick={handleExamBtn}
            component={Link} to="/user/exam" button>
            <ListItemIcon>
                <ChromeReaderMode />
            </ListItemIcon>
                <ListItemText primary="Exam"/>
        </ListItem>
        <ListItem 
            // onClick={handleExamResultBtn}
            component={Link} to="/user/examresult" button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Exam result"/>
        </ListItem>
    </div>
)

const useStyles = makeStyles(usertemplate);

export default function Stuheader(){
    //style
    const classes = userDashboardStyle();
    const classes2 = useStyles();
    //PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    //states and functions 
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    // initialize and destroy the PerfectScrollbar plugin
    const getRoute =() =>{
        return window.location.pathname !== "/user/maps"
    }
    return(
        <div className={classes2.wrapper}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            'name' 님
                    </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {UserListItem}
                    </List>
                </Drawer>
                <div className={classes2.mainPanel} ref={mainPanel}>
                    {getRoute() ? (
                        <div className={classes2.content}>
                            <div className={classes2.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                            <div className={classes2.map}>{switchRoutes}</div>
                        )}
                    {getRoute() ? <Copyright /> : null}
                </div>
            </div>
        </div>
    )
}