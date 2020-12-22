//Import 3rd-party modules
import styled from "styled-components";

import FontAwesome from 'react-fontawesome';

const GoBackContainer = styled("a")`
    cursor: pointer;

    position: absolute;
    top: 65px;
    left: 20px;

    width: 30%;

    margin: 0;
    padding: 0;
`;

const Text = styled("p")`
    display: inline-block;
    margin: 0;
    margin-left: 6px;
    padding: 5px;
`;

const BackIcon = styled(FontAwesome)`

`;

export { GoBackContainer, Text, BackIcon };