import React from "react";
import PropTypes from "prop-types";

const SupportSquare = (props) => {
    return(
        <section className="support-square" id={props.id}>
                <a href={props.pageLink}>
                    <img src={props.imgSrc} className="square-icon" alt="Square-Icon" />
                    <h3>{props.title}</h3>
                </a>
            </section>);
};

SupportSquare.propTypes = {
    pageLink: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
};

export default SupportSquare;