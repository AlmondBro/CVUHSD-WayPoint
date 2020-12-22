//Import 3rd-party modules
import styled from "styled-components";

//TODO: Find all support-square CSS class instances
let SupportSquareSection = styled("section")`
    cursor: pointer;

    display: inline-block;

    color: white;
    background-color: #2B2B2B;

    width: 150px;

    margin: 5px 5px;
    padding: 10px;
  

    line-height: 7px;
    text-align: center;

    border-radius: 10px;

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
        display: block;
        font-size: 2em;
    }

    & h3 {
        display: block;
        font-size: 0.95em;
        font-weight: 500;
    }
`;

let SquareIcon = styled("img")`
    width: 75px;
    height: 75px;
    padding-top: 5px;
`;

export { SupportSquareSection, SquareIcon };