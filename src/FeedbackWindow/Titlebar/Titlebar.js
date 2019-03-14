import React from "react";

import styles from "./Titlebar.css";

const Titlebar = () => {
    let minimizeWindow = () => {
        const electron = window.require("electron");
        const remote = electron.remote;

        const currentWindow = remote.getCurrentWindow();
        currentWindow.minimize(); 
    }; //end minimizeAndClose()

    let closeWindow = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const currentWindow = remote.getCurrentWindow();

        currentWindow.close();
    };
    return (
        <section id="fb-titlebar" className="noHighlight">
            <div id="fb-titlebar-inner">
                <div id="fb-wp-icon-container">
                    <img id="fb-wp-icon" src="img/wp-logo.svg" title="Waypoint Version 0.1" />
                </div>
            </div>
            <div id="fb-titlebarButtons-container">
                <div id="fb-button-close" onClick={ closeWindow } title="Close Window">
                    <img src="img/icon-close.png" />
                </div>
                <div id="fb-button-minimize" onClick={ minimizeWindow  } title="Minimize Window">
                    <img src="img/icon-minimize.png" />
                </div>
            </div>
        </section>
    );
}; //end Titlebar()

export default Titlebar;

