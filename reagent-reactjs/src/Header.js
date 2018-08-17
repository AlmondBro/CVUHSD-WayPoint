import React from "react";

//Import required external components
import NotificationsPanel from "./NotificationsPanel.js";
import BackButton from "./BackButton.js";

window.eval = global.eval = () => {
    console.error(`Sorry, this app does not support window.eval() for security purposes.`);
    return -1;
} 

window.addEventListener("load", () => {
    console.log("Window loaded -- Header.js");

    //Guess the electron and remote modules are not needed!
    //const electron = window.require("electron");
    //const remote = electron.remote;
    /* //Need to comment out for now since it is not minifying 
    const isDev = require("electron-is-dev"); 
    
    //Install React dev tools in Electron, but only in development
    if (isDev) {
        require("electron-react-devtools").install();
        console.log("Renderer process - electron-react-devtools ready to be installed");
    } */

    //Minimize and close the electron window when you click on the "-" or "x" HTML element
    const minimizeAndClose = (() => { 
        document.getElementById("button-minimize").addEventListener("click", function (e){
            console.log("Button minimize");
            const electron = window.require("electron");
            const remote = electron.remote;

            const browserWindow = remote.getCurrentWindow();
            browserWindow.minimize(); 
        });

        document.getElementById("button-close").addEventListener("click", (e) => {
            const electron = window.require("electron");
            const remote = electron.remote;
            const browserWindow = remote.getCurrentWindow();

            browserWindow.close();
        });
    })(); 

    /* //Doesn't work for some reason -- need to make minimizeAndClose() self-executing
    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            minimizeAndClose(); 
        } //end if-statement
    } //end onreadystatechange() */

}); //end window.onload
   
const Header = () => {
        return( 
            <header className="header-frame redToDarkRedgradient">
                <input type="checkbox" className="checkbox-hack" id="notification-icon-checkbox" />
                <section className="redToDarkRedgradient">
                    <a><img src="https://portal.centinela.k12.ca.us/images/CV-600x600.png" className="img-responsive" id="reagentLogo" alt="CVUHSD Logo" /></a>
                    <h1>
                        <img src="img/wp-logo.svg" className="headerLogo" alt="Waypoint" />
                    </h1>

                    <label className="notificationIcon clickable" id="notification-icon" htmlFor="notification-icon-checkbox">
                        {/* <span className="notifications-count">1</span> */}
                        <div id="button-menu">
                            <img src="img/icon-hamburger.png" title="Open Notification Menu" alt="Hamburger Menu" />
                        </div>
                    </label>
                </section>

                <NotificationsPanel />
                <BackButton />
        </header>
        );
}

export default Header;