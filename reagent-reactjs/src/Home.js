import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import SupportSquaresContainer from "./SupportSquaresContainer.js";
import SupportSquare from "./SupportSquare.js";



class Home extends Component {
    render() {
        return (
            <p>Please select an option from below:</p>,

           <SupportSquaresContainer>
                <SupportSquare pageLink="/autoFix-tools" 
                               icon="fas fa-wrench" 
                               title="Autofix Tools" />

                <SupportSquare pageLink="/submit-ticket" 
                            icon="fas fa-newspaper" 
                            title="Submit Ticket" />

                <SupportSquare pageLink="/quickFix-tutorials" 
                            icon="fas fa-book" 
                            title="QuickFix Tutorials" />

               <SupportSquare pageLink="/call-helpdesk" 
                            icon="fas fa-phone" 
                            title="Call Helpdesk" />

                <SupportSquare pageLink="#" 
                        icon="fas fa-bullseye" 
                        title="Staff Portal" />

                <SupportSquare pageLink="#" 
                    icon="fas fa-bullhorn" 
                    title="Announcements" />

            </SupportSquaresContainer>
        );
    }
}

export default Home;