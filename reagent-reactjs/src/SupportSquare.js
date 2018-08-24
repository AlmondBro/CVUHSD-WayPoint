import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SupportSquare = (props) => {
    if (props.pageLink) {
        return(
            <section className="support-square" id={props.id}>
                    <NavLink to={props.pageLink}>
                        <img src={props.imgSrc} className="square-icon" alt="Square-Icon" />
                        <h3>{props.title}</h3>
                    </NavLink>
            </section>); 
    } else {
        return(
            <section className="support-square" id={props.id}>
                <a href={props.phone}>
                    <img src={props.imgSrc} className="square-icon" alt="Square-Icon" />
                    <h3>{props.title}</h3>
                </a>
            </section>);
    } //end else-statement
}; //end SupportSquare functional component

SupportSquare.propTypes = {
    pageLink: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
};

export default SupportSquare;