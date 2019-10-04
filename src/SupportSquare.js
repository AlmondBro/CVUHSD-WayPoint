import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Import 3rd-party modules
import styled from "styled-components";

//TODO: Find all support-square CSS class instances
let SupportSquareSection = styled.section`
    background-color: #2B2B2B;
    color: white;
    text-align: center;
    width: 150px;
    padding: 10px;
    /* margin-left: 12px; */
    display: inline-block;
    margin: 5px 5px;
    cursor: pointer;
    line-height: 7px;

    &:hover, &:active {
        background-color: #3c3c3c;
    }

    &:hover, &:focus {
        color: white;
        text-decoration: none;
    }

    & a {
        color: white;
        text-decoration: none;
    }

    & i {
        font-size: 2em;
        /*was 1.6em */
        display: block;
    }

    & h3 {
        display: block;
        font-size: 0.95em;
        font-weight: 500;
    }
`;

let SquareIcon = styled.img`
    padding-top: 5px;
    width: 75px;
    height: 75px;
    /* 40px*/
`

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