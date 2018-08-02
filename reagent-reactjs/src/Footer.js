import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Your username",
            ipAddress: this.getIPAddress()
        };
    }

    getIPAddress = () => {
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
            IP_Address = "127.0.0.1";
        } 
        //console.log("Returning IP address:\t" + IP_Address);
        return IP_Address;
    }

    componentDidMount = () => { 
        const electron = window.require("electron");
        const remote = electron.remote;

        const completeUserName = remote.require("fullname");
      //  console.log("OS Network Interface Obj:\t" + JSON.stringify(os.networkInterfaces()) );
       // console.log("MacAddress:\t" + JSON.stringify(macaddress.networkInterfaces(), null, 2));
      //  console.log("OS username:\t" + os.userInfo().username);

        completeUserName().then(name => {
           // console.log("Complete userName:\t" + name);
            if (name != null || undefined || "undefined" || "") {
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
        const electron = window.require("electron");
        const remote = electron.remote;
        const os = remote.require("os");
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
