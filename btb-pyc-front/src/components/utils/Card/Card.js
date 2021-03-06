import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import cardStyle from "../../../assets/jss/components/styles/cardStyle.js";



export default function Card(props) {
    const classes = cardStyle();
    const { className, children, plain, profile, chart, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    chart: PropTypes.bool,
    children: PropTypes.node
};
