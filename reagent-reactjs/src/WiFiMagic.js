import React, {Component} from "react";
const electron = window.require("electron");
const remote = electron.remote;
const cmd = remote.require('node-cmd');   

export default class WiFiMagic extends Component {
    constructor(props) {
        super(props);
        this.wifiIconSrc = "./img/icon-wifi.png";
        this.state = {
            message: ""
        };
        //this.state = {date: new Date()};
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
        return(
            <section className="wiFi-magic">
                <img src={this.wifiIconSrc} className="img-responsive wiggle" id="wifiMagic-fixingIcon" />
                <p>Attempting repairs...</p>
                <p>{this.state.message}</p>
            </section>
            );
    }
    
}


