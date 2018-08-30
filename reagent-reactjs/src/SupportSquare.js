import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SupportSquare = (props) => {
   return props.pageLink ? (
            <Link to={props.pageLink} className="noHighlight noDrag">
                <section className="support-square" id={props.id}>
                        
                            <img src={props.imgSrc} className="square-icon noHighlight noDrag" alt="Square-Icon" />
                            <h3 className="noHighlight noDrag">{props.title}</h3>
                            { props.ext ? (<p class="helpdesk-ext"><span>ext.</span> {props.ext}</p>) : null }
                    
                </section>  
            </Link> ):
            (
                <section className="support-square" id={props.id}>
                    <a className="noHighlight noDrag" href={props.phone}>
                        <img src={props.imgSrc} className="square-icon noHighlight noDrag" alt="Square-Icon" />
                        <h3 className="noHighlight noDrag">{props.title}</h3>
                        { props.ext ? (<p class="helpdesk-ext"><span>ext.</span> {props.ext}</p>) : null }
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