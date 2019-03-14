import React from "react";

import styles from "./Titlebar.css";

const Titlebar = () => {
    return (
        <section id="fb-titlebar">
            <div id="title">
                <div id="fb-wp-icon-container">
                    <img id="fb-wp-icon" src="img/wp-logo.svg" title="Waypoint Version 0.1" />
                </div>
            </div>
            <div id="button-close" title="Close Window">
                <img src="img/icon-close.png" />
            </div>
            <div id="button-minimize" title="Minimize Window">
                <img src="img/icon-minimize.png" />
            </div>
        </section>
    );
}; //end Titlebar()

export default Titlebar;

