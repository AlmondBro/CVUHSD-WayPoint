import React, { Component } from "react";
import SupportSquare from "./SupportSquare.js";
import Footer from "./Footer.js";

class Home extends Component {
    render() {
        return (
            <div className="support-squares-container">
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

                <Footer />
            </div>
        );
    }
}

export default Home;