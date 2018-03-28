import React, { Component } from "react";

//Import required external components
import SupportSquaresContainer from "./SupportSquaresContainer.js";
import SupportSquare from "./SupportSquare.js";

class QuickFixTutorials extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SupportSquaresContainer>
                <SupportSquare pageLink="#" 
                            icon="fab fa-chrome" 
                            title="Chrome OS" />,

                <SupportSquare pageLink="#" 
                                icon="fab fa-windows" 
                                title="Windows 10" />,

                  <SupportSquare pageLink="#" 
                                icon="fab fa-windows" 
                                title="Windows 8" />,  

                 <SupportSquare pageLink="#" 
                                icon="fab fa-apple" 
                                title="Mac OS X" />   

            </ SupportSquaresContainer>
        );
    }
}

export default QuickFixTutorials;