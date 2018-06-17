import React, { Component } from "react";

//Import required external components
import SupportSquare from "./SupportSquare.js";

const quickFixTutorials = (props) => {
    return(
        <div class="support-squares-container">
            <SupportSquare pageLink="#" 
                        icon="fab fa-chrome" 
                        title="Chrome OS" />

            <SupportSquare pageLink="#" 
                            icon="fab fa-windows" 
                            title="Windows 10" />

              <SupportSquare pageLink="#" 
                            icon="fab fa-windows" 
                            title="Windows 8" />

             <SupportSquare pageLink="#" 
                            icon="fab fa-apple" 
                            title="Mac OS X" />   

        </div>
    );
};

export default quickFixTutorials;