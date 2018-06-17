import React, { Component } from "react";

//Import required external components
import SupportSquare from "./SupportSquare.js";

class HelpDesk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div class="support-squares-container">
            <SupportSquare pageLink="tel:+13102633200p7398" 
                        icon="fas fa-phone-square" 
                        title="Helpdesk Hotline"
                        id="helpdeskHotline-supportSquare" />

            <SupportSquare pageLink="tel:+13102633100" 
                        icon="fas fa-building" 
                        title="Lawndale" />

            <SupportSquare pageLink="tel:+13102632346" 
                        icon="fas fa-building" 
                        title="Leuzinger" />

            <SupportSquare pageLink="tel:+13102633286" 
                        icon="fas fa-building" 
                        title="Hawthorne" />

            <SupportSquare pageLink="tel:+13102633286" 
                icon="fas fa-building" 
                title="Lloyde" />      

            </div>
        );
    }
}

export default HelpDesk;