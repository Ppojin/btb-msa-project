import React from "react";
import {Link, Route, Router} from 'react-router-dom'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "assets/jss/components/styles/customButtonStyle.js";
import { MenuItem } from '@material-ui/core';

const makeComponentStyles = makeStyles(() => ({
    ...buttonStyle
}));

const CustomButton = React.forwardRef((props, href) => {
    const {
        to,
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        ...rest
    } = props;

    const classes = makeComponentStyles();

    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className
    });
    return (
            <MenuItem {...rest} path={to} className={btnClasses}>
                {children}
            </MenuItem>
            // <Button {...rest} className={btnClasses}>

            // </Button>
    );
});

CustomButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

export default CustomButton;
