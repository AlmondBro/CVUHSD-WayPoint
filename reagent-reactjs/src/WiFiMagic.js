import React, {Component} from "react";
const electron = window.require("electron");
const remote = electron.remote;
const cmd = remote.require('node-cmd');   

class WiFiMagic extends Component {
    constructor(props) {
        super(props);
        this.wifiIconSrc = "./img/icon-wifi.png";
        this.compassNeedle = "./img/compass-needle.svg";
        this.compassBody = "./img/compass-body.svg";
        this.state = {
            message: ""
        };
    }

    fixWiFi() {
        cmd.get(
            'netsh winsock reset',
            function(err, data, stderr){
                console.log('netsh winsock reset', data);
                /*this.setState({
                    message: data
                }); */
            }
        ); 

        cmd.get(
            'netsh int ip reset',
            function(err, data, stderr){
                console.log('netsh int ip reset', data);
            }
        ); 

        cmd.get(
            'ipconfig /release',
            function(err, data, stderr){
                console.log('ipconfig /release', data);
            }
        ); 

        cmd.get(
            'ipconfig /renew',
            function(err, data, stderr){
                console.log('ipconfig /renew', data);
            }
        ); 

        cmd.get(
            'ipconfig /flushdns',
            function(err, data, stderr){
                console.log('ipconfig /flushdns', data);
            }
        ); 
    }

    componentDidMount() {
        this.fixWiFi();
    }  

    render() {
        return (
            <section class="wiFi-magic">
                <img src={this.compassNeedle} className="needle-rotate" id="compass-needle" />
                <img src={this.compassBody} className="" id="compass-body" />
                <p id="compass-message">Finding the CV-Way...</p>
            </section>
        );
    }
    
}

export default WiFiMagic;

