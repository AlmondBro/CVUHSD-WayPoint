import React, { Component } from "react";

const electron = window.require("electron");
const remote = window.require("electron").remote;
const os = remote.require("os");

const completeUserName = remote.require('fullname');
let macaddress = remote.require('macaddress');

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: os.userInfo().username
        };
        
        this.IP_Address = macaddress.networkInterfaces()["Local Area Connection"]["ipv4"] || macaddress.networkInterfaces()["Wi-Fi"]["ipv4"] || os.networkInterfaces()["Local Area Connection"][1].address || os.networkInterfaces()["Wi-Fi"][1].address || os.networkInterfaces()["Local Area Connection"][1].address || os.networkInterfaces()["Wi-Fi"][1].address;
    }

    componentDidMount = () => { 
        console.log("OS Network Interface Obj:\t" + JSON.stringify(os.networkInterfaces()) );
        console.log("MacAddress:\t" + JSON.stringify(macaddress.networkInterfaces(), null, 2));
        console.log("OS username:\t" + os.userInfo().username);

        completeUserName().then(name => {
            console.log("Complete userName:\t" + name);
            this.setState({
                userName: name
            });
            //=> 'Sindre Sorhus'
        });
    }

    determineWindowsVersion = (releaseNumber) => {
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
    
    render() {
        return (
            <footer>
                <div className="USER-container"><p>User: <span className="currentUserName">{ this.state.userName || "Your Username" }</span></p></div>
                <div className="IP-container"><p className="IP-message">IP Addresss:&#9;<span>{this.IP_Address || "Your IP Address"}</span></p></div>
                <div className="OS-container"><p className="OS-platform">System:&#9;<span>{this.determineWindowsVersion(os.release()) || "OS Platform"}</span></p></div>
                <p className="cv-way">Powered by: The CV-Way</p>
            </footer>
        );
    }
}

export default Footer;