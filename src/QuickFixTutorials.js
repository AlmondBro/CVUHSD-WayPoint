import React from 'react';

//Import required external components
import SupportSquare from './SupportSquare/SupportSquare.js';

//Import 3rd-party libraries 
import lifecycle from "react-pure-lifecycle";

var pageTitle = "QuickFix Tutorials";

const componentDidMount = (props) => {
    props.updateTitle(pageTitle);
    props.renderFooter(false);
};

const methods = {
    componentDidMount
};

const QuickFixTutorials = (props) => {
    return(
        <div className="support-squares-container">
            <SupportSquare pageLink="/quickFix-ChromeOS" 
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

export default lifecycle(methods)(QuickFixTutorials);