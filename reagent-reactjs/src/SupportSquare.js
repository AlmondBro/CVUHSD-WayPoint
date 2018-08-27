import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SupportSquare = (props) => {
   return props.pageLink ? (
            <Link to={props.pageLink}>
                <section className="support-square" id={props.id}>
                        
                            <img src={props.imgSrc} className="square-icon" alt="Square-Icon" />
                            <h3>{props.title}</h3>
                    
                </section>  
            </Link> ):
            (
                <section className="support-square" id={props.id}>
                    <a href={props.phone}>
                        <img src={props.imgSrc} className="square-icon" alt="Square-Icon" />
                        <h3>{props.title}</h3>
                    </a>
                </section>
            );
}; //end SupportSquare functional component

SupportSquare.propTypes = {
    pageLink: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
};

export default SupportSquare;