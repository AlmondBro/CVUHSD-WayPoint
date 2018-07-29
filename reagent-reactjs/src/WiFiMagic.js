import React, {Component} from "react";

const electron = window.require("electron");
const remote = electron.remote;
const nrc = remote.require('node-run-cmd');

class WiFiMagic extends Component {
    constructor(props) {
        super(props);
        this.wifiIconSrc = "./img/icon-wifi.png";
        this.compassNeedle = "./img/compass-needle.svg";
        this.compassBody = "./img/compass-body.svg";
        this.fixWiFi = this.fixWiFi.bind(this);
        this.state = {
            message: "Finding the CV-Way...",
            clicks: 0
        };
    }

   /* incrementClick() {
       return this.state.click++;
    } */
//https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies
    fixWiFi() {
        if (this.state.clicks === 0 ) {
            this.setState( { clicks: this.state.clicks+1 } );
            console.log("First click");

            var commandConsoleOutput = (data) => {
                console.log("Data:\t" + data);
            };
        
         /* nrc.run('netsh winsock reset', { onData: commandConsoleOutput });
            nrc.run('netsh int ip reset', { onData: commandConsoleOutput });
            nrc.run('ipconfig /release', { onData: commandConsoleOutput });
            nrc.run('ipconfig /renew', { onData: commandConsoleOutput });
            nrc.run('ipconfig /flushdns', { onData: commandConsoleOutput }); */

            const sleep = (milliseconds) => {
                return new Promise(resolve=>{
                    setTimeout(resolve,milliseconds);
                });
            } //end sleep()

            async function runWiFiFix(){
                nrc.run('netsh winsock reset', { onData: commandConsoleOutput });
                await sleep(2000);
                nrc.run('netsh int ip reset', { onData: commandConsoleOutput });
                await sleep(2000);
                nrc.run('ipconfig /release', { onData: commandConsoleOutput });
                await sleep(2000);
                nrc.run('ipconfig /renew', { onData: commandConsoleOutput });
                await sleep(2000);
                nrc.run('ipconfig /flushdns', { onData: commandConsoleOutput });
             }

             runWiFiFix();
    }
        console.log("After fixWiFi():\t" + this.state.clicks);
        return;
        
    } //endFixWiFi method

   /* spinNeedle() {
        //document.getElementById("compass-needle").addEventListener("click", )
    } */

    componentDidMount() {
        console.log("Before fixWiFi():\t" + this.state.clicks);
        this.fixWiFi();
        //console.log("After fixWiFi():\t" + this.state.clicks);
    }  

    render() {
        return (
            <section className="wiFi-magic">
                <img src={this.compassNeedle} onClick="this.spinNeedle" className="needle-rotate" id="compass-needle" alt="Compass Needle" />
                <img src={this.compassBody} className="" id="compass-body" alt="Compass Body" />
                <p id="compass-message">{ this.state.message }</p>
            </section>
        );
    }
    
}

export default WiFiMagic;

