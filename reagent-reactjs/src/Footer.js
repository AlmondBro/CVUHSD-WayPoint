import React from "react";
const electron = window.require("electron");
const remote = window.require("electron").remote;
const os = remote.require("os");

const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

const completeUserName = remote.require('fullname');

var yolo = this;

completeUserName().then(name => {
    console.log("Name:\t" + name);
    getUserName(name);
    yolo = name;
	//=> 'Sindre Sorhus'
});

const getUserName = (userName) => {
    return userName;
}

var fullNameOfUser = getUserName();
console.log("fullNameOfUser:\t" + fullNameOfUser);

let IP_Address = os.networkInterfaces()["Local Area Connection"][1].address || os.networkInterfaces()["Wi-Fi"][1].address;
console.log("IP_Address:\t" + IP_Address); 
//let IP_Address = require("os").networkInterfaces["Local Area Connection"][1].address
//console.log("IP Address:\t" + IP_Address);
console.log("Networkdfdfdfddf Interface Obj:\t" + JSON.stringify(os.networkInterfaces()) );

const determineWindowsVersion = (releaseNumber) => {
    let windowsVersion;
    let releaseNumberInt = parseInt(releaseNumber);
    if (releaseNumberInt >= 6 && releaseNumberInt <= 8 ) {
        windowsVersion = "Windows 7"
    }

    else  if (releaseNumberInt >= 8 ) {
        windowsVersion = "Windows 10"
    }

    return windowsVersion;
}

const footer = (props) => {
    return (
        <footer>
            <p>Welcome <span className="currentUserName">{IP_Address || "UserName"}</span></p>
            <p className="IP-message">Your IP Addresss:&#9;<span>{IP_Address || "Your IP Address"}</span></p>
            <p className="OS-platform">Operating System:&#9;<span>{determineWindowsVersion(os.release()) || "OS Platform"}</span></p>
            <p className="cv-way">Powered by: The CV-Way</p>
        </footer>
    );
};

export default footer;