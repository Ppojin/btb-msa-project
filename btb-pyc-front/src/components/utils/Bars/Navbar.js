import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// @material-ui/icons

// core components
import Button from "../Button/UserButton.js";

import navstyles from "../../../assets/jss/components/styles/navbarStyle.js";

const useStyles = makeStyles(navstyles);

export default function Navbar(props) {
    const classes = useStyles();
    function makeBrand() {
        var name;
        props.UserRoutes.map(prop => {
            if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
                name = props.rtlActive ? prop.rtlName : prop.name;
            }
            return null;
        });
        return name;
    }
    const { color } = props;
    const appBarClasses = classNames({
        [" " + classes[color]]: color
    });
    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    <Button color="transparent" className={classes.title}>
                        {makeBrand()}
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

Navbar.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
    handleDrawerToggle: PropTypes.func,
    UserRoutes: PropTypes.arrayOf(PropTypes.object)
};
