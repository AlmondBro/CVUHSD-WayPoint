import React, { Component } from "react";

//Import utilities
import { stringIsEmptyOrBlank } from "./utilityFunctions.js";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.getUsername(),
            ipAddress: this.getIPAddress()
        };
    } //end constructor()
    
    getUsername = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const completeUserName = remote.require("fullname");

      completeUserName().then(name => {
          console.log("completeIserName():\t" + name);
          if ( !stringIsEmptyOrBlank(name)) {
                console.log("Username:\t" + name);
                console.log("Username type:\t" + typeof(name) );
                console.log("Username length:\t" + name.length);
                this.setState({
                    userName: name
                });
            } //end if-statement 
            else {
                const os = remote.require("os");
                console.log("Complete username is empty!");
                this.setState({
                    userName: os.userInfo().username
                });
            } //end else-statement
        });  //end completeUserName() 
    } //end completeUserName()

    getIPAddress = () => {
        console.log("Process env:\t" + JSON.stringify(process.env));
        const electron = window.require("electron");
        const remote = electron.remote;

        const macaddress = remote.require("macaddress");
        const undefsafe = remote.require("undefsafe");

        let IP_Address; 

        if ( undefsafe(macaddress.networkInterfaces(), "Ethernet.ipv4") !== undefined ) {
            //  IP_Address = macaddress.networkInterfaces()["Local Area Connection"]["ipv4"];
            IP_Address = undefsafe(macaddress.networkInterfaces(), "Ethernet.ipv4");
         //   console.log("IPV4 ethernet:\t" + IP_Address);
           // console.log("IPV4 ethernet Typeof:\t"+ typeof IP_Address);
        }

        else if ( undefsafe(macaddress.networkInterfaces(), "VirtualBox Host-Only Network.ipv4") !== undefined ) {
            //  IP_Address = macaddress.networkInterfaces()["Local Area Connection"]["ipv4"];
            IP_Address = undefsafe(macaddress.networkInterfaces(), "VirtualBox Host-Only Network.ipv4");
            //console.log("Virtual Box host only network:\t" + IP_Address);
           // console.log("Virtual Box host only network Typeof:\t"+ typeof IP_Address);
        }

        else if ( undefsafe(macaddress.networkInterfaces(), "Local Area Connection.ipv4") !== undefined ) {
          //  IP_Address = macaddress.networkInterfaces()["Local Area Connection"]["ipv4"];
          IP_Address = undefsafe(macaddress.networkInterfaces(), "Local Area Connection.ipv4");
        //  console.log("IPV4 local area connection:\t" + IP_Address);
         // console.log("IPV4  local area connection Typeof:\t"+ typeof IP_Address);
        }

        else if ( undefsafe(macaddress, "Wi-Fi.ipv4") !== undefined) {
            IP_Address =  undefsafe(macaddress, "Wi-Fi.ipv4"); 
           // console.log("IPV4 wifi:\t" + IP_Address);
            //console.log("IPV4 wifTypeof:\t"+ typeof IP_Address);
        }
        
        else {
            IP_Address = "IP Address Underdetermined";
        } 
        //console.log("Returning IP address:\t" + IP_Address);
        return IP_Address;
    }

    componentDidMount = () => { 
    /*console.log("OS Network Interface Obj:\t" + JSON.stringify(os.networkInterfaces()) );
        console.log("MacAddress:\t" + JSON.stringify(macaddress.networkInterfaces(), null, 2));
        console.log("OS username:\t" + os.userInfo().username); */
    } //end componentDidMount() 

    determineWindowsVersion = (releaseNumber) => {
        let windowsVersion;
        let releaseNumberInt = parseInt(releaseNumber, 10);
        //console.log(releaseNumber);
       // console.log(releaseNumberInt);

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
    
     render = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const os = remote.require("os");
        return (
                this.props.renderFooterBool ? (
                    <footer>
                        <div className="USER-container"><p>User: <span className="currentUserName">{ this.state.userName }</span></p></div>
                        <div className="IP-container"><p className="IP-message">IP Address:&#9;<span>{ this.state.ipAddress }</span></p></div>
                        <div className="OS-container"><p className="OS-platform">System:&#9;<span>{this.determineWindowsVersion(os.release()) || "OS Platform"}</span></p></div>
                        <p className="cv-way">Powered by: The CV-Way</p>
                    </footer>
                 ) : null
            ); //end return
    } //end render()
} //end class

export default Footer;
