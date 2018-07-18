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
                console.log('netsh winsock reset:\t', data);
                console.log('netsh winsock reset error:\t', err);
                this.setState({
                    message: "Resetting winsock..."
                }); 
            }
        ); 

        setInterval( () => {
            cmd.get(
                'netsh int ip reset',
                (err, data, stderr) => {
                    console.log('netsh int ip reset:\t', data);
                    console.log('netsh int ip reset err:\t', err);
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
                    console.log('ipconfig /release:\t', data);
                    console.log('ipconfig /release err:\t', err);
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
                    console.log('ipconfig /renew:\t', data);
                    console.log('ipconfig /renew err:\t', err);
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
                    console.log('ipconfig /flushdns:\t', data);
                    console.log('ipconfig /flushdns err:\t', err);
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
                <img src={this.compassNeedle} className="needle-rotate" id="Compass Needle" alt="Compass Needle" />
                <img src={this.compassBody} className="" id="compass-body" alt="Compass Body" />
                <p id="compass-message">{ this.state.message }</p>
            </section>
        );
    }
    
}

export default WiFiMagic;

