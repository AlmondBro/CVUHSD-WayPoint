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
            message: "Finding the CV-Way..."
        };
    }

    fixWiFi() {
        cmd.get(
            'netsh winsock reset',
            (err, data, stderr) => {
                console.log('netsh winsock reset', data);
                this.setState({
                    message: "Resetting winsock..."
                }); 
            }
        ); 

        setInterval( () => {
            cmd.get(
                'netsh int ip reset',
                (err, data, stderr) => {
                    console.log('netsh int ip reset', data);
                    this.setState({
                        message: "Resetting Netsh..."
                    }); 
                }
            ); 
        }, 2000);
       
        setInterval( () => {
            cmd.get(
                'ipconfig /release',
                (err, data, stderr) => {
                    console.log('ipconfig /release', data);
                    this.setState({
                        message: "Releasing ipconfig..."
                    }); 
                }
            ); 
        }, 4000);

        setInterval(() => {
            cmd.get(
                'ipconfig /renew',
                (err, data, stderr) => {
                    console.log('ipconfig /renew', data);
                    this.setState({
                        message: "Renewing ipconfig..."
                    }); 
                }
            ); 
        }, 6000);
       
        setInterval(() => {
            cmd.get(
                'ipconfig /flushdns',
                (err, data, stderr) => {
                    console.log('ipconfig /flushdns', data);
                    this.setState({
                        message: "Flushing DNS..."
                    }); 
                }
            ); 
        }, 8000);
       
    } //endFixWiFi method

    componentDidMount() {
        this.fixWiFi();
    }  

    render() {
        return (
            <section class="wiFi-magic">
                <img src={this.compassNeedle} className="needle-rotate" id="compass-needle" />
                <img src={this.compassBody} className="" id="compass-body" />
                <p id="compass-message">{ this.state.message }</p>
            </section>
        );
    }
    
}

export default WiFiMagic;

