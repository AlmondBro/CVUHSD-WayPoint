import React from "react";

const Titlebar = (props) => {
    return ( 
        <div id="titlebar" className="noHighlight noDrag">
            <div className="titleBarButtons-container">
                <div className="titleBar-button noDrag" id="button-feedback" title="Provide Feedback">
                    <img src="img/icon-feedback.png" className="noDrag" alt="feedback" />
                </div>

                <div className="titleBar-button noDrag" id="button-minimize" title="Minimize Window">
                    <img src="img/icon-minimize.png" className="noDrag" alt="minimize" />
                </div>

                <div className="titleBar-button noDrag" id="button-close" title="Close Window">
                    <img src="img/icon-close.png" className="noDrag" alt="close" />
                </div>
            </div>

            <div id="title">
                <div id="wp-icon-container" className="noDrag">
                    <img id="wp-icon" src="img/wp-icon-grey.png" title="Waypoint Version 0.1" alt="WayPoint Icon" />
                </div>
                <div id="page-title-container"><h2 id="page-title">{props.pageTitle}</h2></div>
            </div>
        </div>
    ); //end return
}; //end titlebar()

export default Titlebar;