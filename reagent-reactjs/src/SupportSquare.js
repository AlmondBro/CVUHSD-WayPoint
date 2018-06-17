import React from "react";
import {NavLink} from "react-router-dom"
import PropTypes from "prop-types";

const SupportSquare = (props) => {
    return(
        <section className="support-square" id={props.id}>
                <NavLink to={props.pageLink}>
                    <img src={props.imgSrc} className="square-icon"/>
                    <h3>{props.title}</h3>
                </NavLink>
            </section>);
};

SupportSquare.propTypes = {
    pageLink: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
};

export default SupportSquare;