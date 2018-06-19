import React from "react";
const electron = window.require("electron");
const remote = window.require("electron").remote;
const os = remote.require("os");

const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

let networkInterfacesModule = os.networkInterfaces()["Local Area Connection"][1].address;
console.log("networkInterfacesModule:\t" + networkInterfacesModule); 
//let IP_Address = require("os").networkInterfaces["Local Area Connection"][1].address
//console.log("IP Address:\t" + IP_Address);
console.log("Networkdfdfdfddf Interface Obj:\t" + JSON.stringify(os.networkInterfaces()) );

const footer = (props) => {
    return (
        <footer>
            <p>Welcome <span className="currentUserName">{props.userName || "Your UserName"}</span></p>
            <p className="IP-message">Your IP Addresss:&#9;<span>{networkInterfacesModule || "Your IP Address"}</span></p>
            <p className="cv-way">Powered by: The CV-Way</p>
        </footer>
    );
};

export default footer;