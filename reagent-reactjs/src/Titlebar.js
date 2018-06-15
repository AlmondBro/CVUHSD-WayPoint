import React from "react";

const titlebar = () => {
        return ( 
        <div id="titlebar">
            <div className="titleBarButtons-container">
                <div className="titleBar-button" id="button-feedback" title="Provide Feedback">
                    <img src="img/icon-feedback.png" alt="feedback" />
                </div>

                <div className="titleBar-button" id="button-minimize" title="Minimize Window">
                    <img src="img/icon-minimize.png" alt="minimize" />
                </div>

                <div className="titleBar-button" id="button-close" title="Close Window">
                    <img src="img/icon-close.png" alt="close" />
                </div>
            </div>

            <div id="title">
                <div id="wp-icon-container">
                    <img id="wp-icon" src="img/wp-icon-grey.png" title="Waypoint Version 0.1" alt="WayPoint Icon" />
                </div>
                <h2 id="page-title">Home</h2>
            </div>
        </div>);
};

export default titlebar;