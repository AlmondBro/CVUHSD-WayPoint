import React from "react";

window.onload = function() {
    if (document.body.contains( document.getElementById("portal-webview") )) {
        document.getElementById("portal-webview").addEventListener("new-window", (e) => {
            const {BrowserWindow} = window.require('electron').remote;
            const protocol = require("url").parse(e.url).protocol;
            if (protocol === "http:" || protocol === "https:") {
                const {shell} = window.require("electron");
                shell.openExternal(e.url)
                /* //Load in a new electron window
              //let win = new BrowserWindow({width: 800, height: 600})
              //win.loadURL(e.url); */
            } //end if-statement
          }); //end addEventListener()
    } //end if-statement

} //end window.onload

const staffPortal = () => {
    return (
        <webview src="https://portal.centinela.k12.ca.us/staff.html" className="staff-portal-embed" id="portal-webview"></webview>
    );
};

export default staffPortal;