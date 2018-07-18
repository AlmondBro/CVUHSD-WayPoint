import React from "react";

//Import required external components
import SupportSquare from "./SupportSquare.js";

const quickFixTutorials = (props) => {
    return(
        <div class="support-squares-container">
            <SupportSquare pageLink="#" 
                        icon="fab fa-chrome" 
                        title="Chrome OS"
                        imgSrc="./img/icon-chrome.png" />

            <SupportSquare pageLink="#" 
                            icon="fab fa-windows" 
                            title="Windows 10" 
                            imgSrc="./img/icon-win10.png" />

              <SupportSquare pageLink="#" 
                            icon="fab fa-windows" 
                            title="Windows 7" 
                            imgSrc="./img/icon-win7.png" />

             <SupportSquare pageLink="#" 
                            icon="fab fa-apple" 
                            title="Mac OS X"
                            imgSrc="./img/icon-mac.png" />   

        </div>
    );
};

export default quickFixTutorials;