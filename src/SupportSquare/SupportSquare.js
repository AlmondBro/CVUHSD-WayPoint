import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Import styled sub-components:
import { SupportSquareSection, SquareIcon } from './styled-components.js';

const SupportSquare = (props) => {
   return props.pageLink ? (
            <Link to={props.pageLink} className="noHighlight noDrag">
                <SupportSquareSection id={props.id} onClick={props.onClick}>
                    <SquareIcon src={props.imgSrc} className="noHighlight noDrag" alt="Square-Icon" />
                    <h3 className="noHighlight noDrag">{props.title}</h3>
                    { props.ext ? (<p class="helpdesk-ext"><span>ext.</span> {props.ext}</p>) : null }
                </SupportSquareSection>  
            </Link> ):
            (
                <SupportSquareSection className="support-square" id={props.id} onClick={props.onClick}>
                    <a className="noHighlight noDrag" href={props.phone}>
                        <SquareIcon src={props.imgSrc} className="noHighlight noDrag" alt="Square-Icon" />
                        <h3 className="noHighlight noDrag">{props.title}</h3>
                        { props.ext ? (<p className="helpdesk-ext"><span>ext.</span> {props.ext}</p>) : null }
                    </a>
                </SupportSquareSection>
            );
}; //end SupportSquare functional component

SupportSquare.propTypes = {
    pageLink: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
};

export default SupportSquare;