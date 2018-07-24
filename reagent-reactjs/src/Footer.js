import React, { Component } from "react";

const electron = window.require("electron");
const remote = electron.remote;
const os = remote.require("os");

const completeUserName = remote.require("fullname");
const macaddress = remote.require("macaddress");
const undefsafe = remote.require("undefsafe");

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: os.userInfo().username,
            ipAddress: this.IP_Address
        };
        
       this.IP_Address = this.getIPAddress();
       console.log("IP_Address:\t" + this.IP_Address); 
    }

    getIPAddress = () => {
        let IP_Address; 
        if ( undefsafe(macaddress, '"Local Area Connection"."ipv4"') !== undefined) {
          //  IP_Address = macaddress.networkInterfaces()["Local Area Connection"]["ipv4"];
          IP_Address = undefsafe(macaddress, '"Local Area Connection"."ipv4"');
        }

        else if ( undefsafe(macaddress, '"Wi-Fi"."ipv4"') !== "undefined") {
            IP_Address =  macaddress.networkInterfaces()["Wi-Fi"]["ipv4"]; 
            console.log("IPV4 wifi:\t" + IP_Address);
            console.log("Typeof:\t"+ typeof IP_Address);
        }
/*
        else {
            IP_Address = "127.0.0.1";
        } */

        return IP_Address;
    }

    componentDidMount = () => { 
        console.log("OS Network Interface Obj:\t" + JSON.stringify(os.networkInterfaces()) );
        console.log("MacAddress:\t" + JSON.stringify(macaddress.networkInterfaces(), null, 2));
        console.log("OS username:\t" + os.userInfo().username);

        completeUserName().then(name => {
            console.log("Complete userName:\t" + name);
            if (name != null || undefined || "") {
                this.setState({
                    userName: name
                });
            }
        }); 
    } //end componentDidMount() 

    determineWindowsVersion = (releaseNumber) => {
        let windowsVersion;
        let releaseNumberInt = parseInt(releaseNumber, 10);
        console.log(releaseNumber);
        console.log(releaseNumberInt);

        if (releaseNumber === 6) {
            windowsVersion = "Windows 8"
        }

        if (releaseNumberInt >= 6 && releaseNumberInt <= 8 ) {
            windowsVersion = "Windows 7"
        }
    
        else if (releaseNumberInt >= 8 ) {
            windowsVersion = "Windows 10"
        }

        else if (releaseNumberInt >= 8 ) {
            windowsVersion = "Windows 10"
        }
    
        return windowsVersion;
    }  //end determineWindowsVersion() 
    
    render() {
        return (
            <footer>
                <div className="USER-container"><p>User: <span className="currentUserName">{ this.state.userName || "Your Username" }</span></p></div>
                <div className="IP-container"><p className="IP-message">IP Address:&#9;<span>{this.state.ipAddress || "Your IP Address"}</span></p></div>
                <div className="OS-container"><p className="OS-platform">System:&#9;<span>{this.determineWindowsVersion(os.release()) || "OS Platform"}</span></p></div>
                <p className="cv-way">Powered by: The CV-Way</p>
            </footer>
        );
    } //end render()
} //end class

export default Footer;
