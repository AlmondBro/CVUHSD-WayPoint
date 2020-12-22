import React, { Component } from 'react';

//Import required external components
import SupportSquare from './SupportSquare/SupportSquare.js';

import styled from 'styled-components';

let SupportSquaresContainer = styled.div`
    margin: 5px auto;
    text-align: center;
    max-height: 100%; /*Was 90% with footer visible footer */
    overflow-y: auto;
`; //end SupportSquaresContainer styled-component


class Home extends Component {
    constructor(props) {
        super(props);
        this.pageTitle = "Home";
    } //end constructor()

    componentDidMount = () => {
        this.props.updateTitle(this.pageTitle); 
        this.props.renderFooter(true);
    } //end componentDidMount()

    render = () => {
        return (
            <SupportSquaresContainer>
                <SupportSquare pageLink="/autoFix-tools" 
                               imgSrc="./img/icon-autofix.png" 
                               title="Autofix Tools" />

                <SupportSquare pageLink="/submit-ticket" 
                            imgSrc="./img/icon-ticketsubmit.png" 
                            title="Submit Ticket" />

                <SupportSquare pageLink="/quickFix-tutorials" 
                            imgSrc="./img/icon-tutorial.png" 
                            title="QuickFix Tutorials" />

               <SupportSquare pageLink="/call-helpdesk" 
                            imgSrc="./img/icon-phone.png" 
                            title="Call Helpdesk" />

                <SupportSquare pageLink="/staffPortal" 
                        imgSrc="./img/icon-portal.png" 
                        title="Staff Portal" />

                <SupportSquare pageLink="/announcements" 
                    imgSrc="./img/icon-announce2.png" 
                    title="Announcements" />
            </SupportSquaresContainer>
        ); //end return statement
    } //end render()
} //end Home class

export default Home;