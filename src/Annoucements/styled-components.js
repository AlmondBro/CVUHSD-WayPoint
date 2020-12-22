import styled from 'styled-components';

const AnnoucementsList = styled("section")`
    padding: 0.3em;
`;

const Image = styled("img")`
    display: inline-block;
`;

const HeaderContainer = styled(`div`)`
    width: 70%;
    padding: 0.5em;
`;


const Header = styled("h3")`
    text-align: left;
    margin: 0;
`;

const Details = styled("p")`
    text-align: left;
    margin: 0;

    max-height: 75px;
    overflow-y: auto;
`;

export { AnnoucementsList, Image, HeaderContainer, Header, Details };