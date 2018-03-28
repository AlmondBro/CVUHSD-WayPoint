import React, { Component } from "react";

//Import required external components
import SupportSquaresContainer from "./SupportSquaresContainer.js";
import SupportSquare from "./SupportSquare.js";

class HelpDesk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SupportSquaresContainer>
                
                <SupportSquare pageLink="tel:+13102633100" 
                            icon="fab fa-building" 
                            title="Lawndale"
                            id="helpdeskHotline-supportSquare" />,

                <SupportSquare pageLink="tel:+13102633100" 
                            icon="fab fa-building" 
                            title="Lawndale" />,

                <SupportSquare pageLink="tel:+13102632346" 
                            icon="fab fa-building" 
                            title="Leuzinger" />,

                <SupportSquare pageLink="tel:+13102633286" 
                            icon="fab fa-building" 
                            title="Hawthorne" />,

                <SupportSquare pageLink="tel:+13102633286" 
                    icon="fab fa-building" 
                    title="Lloyde" />      

            </SupportSquaresContainer>
        );
    }
}