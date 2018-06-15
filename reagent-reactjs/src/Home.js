import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import SupportSquaresContainer from "./SupportSquaresContainer.js";
import SupportSquare from "./SupportSquare.js";

class Home extends Component {
    render() {
        return (
           <SupportSquaresContainer>
                <SupportSquare pageLink="/autoFix-tools" 
                               imgSrc="img/icon-autofix.png" 
                               title="Autofix Tools" />

                <SupportSquare pageLink="/submit-ticket" 
                            imgSrc="img/icon-ticketsubmit.png" 
                            title="Submit Ticket" />

                <SupportSquare pageLink="/quickFix-tutorials" 
                            ImgSrc="img/icon-tutorial.png" 
                            title="QuickFix Tutorials" />

               <SupportSquare pageLink="/call-helpdesk" 
                            imgSrc="img/icon-phone.png" 
                            title="Call Helpdesk" />

                <SupportSquare pageLink="#" 
                        imgSrc="img/icon-portal.png" 
                        title="Staff Portal" />

                <SupportSquare pageLink="#" 
                    imgSrc="img/icon-announce2.png" 
                    title="Announcements" />

            </SupportSquaresContainer>
        );
    }
}

export default Home;