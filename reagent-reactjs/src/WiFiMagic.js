import React, {Component} from "react";

const electron = window.require("electron");
const remote = electron.remote;
const nrc = remote.require("node-run-cmd");

class WiFiMagic extends Component {
    constructor(props) {
        super(props);
        this.wifiIconSrc = "./img/icon-wifi.png";
        this.compassNeedle = "./img/compass-needle.svg";
        this.compassBody = "./img/compass-body.svg";

        //  Do this only when not using arrow function.
        //  this.fixWiFi = this.fixWiFi.bind(this);
        //  this.spinNeedle = this.spinNeedle.bind(this);

      //  this.runWiFiFix = this.runWiFiFix.bind(this);
        this.state = {
            message: ["Click on the compass to initiate wi-fi fixes."],
            clicks: 0
        };
    }

   /* incrementClick() {
       return this.state.click++;
    } */
    //  https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies
    //  fixWiFi = () =>
    //  fixWiFi()
    checkmark = () => {
        return(
        <div id="checkmark-container">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmarkcircle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmarkcheck" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        </div>);
    }

    fixWiFi = () => {
        if (this.state.clicks === 0 ) {
            this.setState( { clicks: this.state.clicks+1 } );
            console.log("First click");

            const sleep = (milliseconds) => {
                return new Promise(resolve=>{
                    setTimeout(resolve,milliseconds);
                });
            } //end sleep()

            const commandConsoleOutput = (data) => {
                console.log("Data:\t" + data);
            };

            // runWiFiFix = async () =>
            // async function runWiFiFix()
            // this.runWiFiFix = this.runWiFiFix.bind(this);
            const runWiFiFix = async () => {
                console.log("runWiFiFix():\t");

                nrc.run('ls', { onData: commandConsoleOutput });

                nrc.run("netsh winsock reset", { onData: commandConsoleOutput });
                await sleep(2000);
                this.setState({
                    message: "Reset Windows socket\n" + this.checkmark()
                });

                nrc.run('netsh int ip reset', { onData: commandConsoleOutput });
                await sleep(2000);
                this.setState({
                    message: this.state.message + "Reset IP\n"
                });

                nrc.run('ipconfig /release', { onData: commandConsoleOutput });
                await sleep(2000);
                this.setState({
                    message: this.state.message + "Released IP\n"
                });

                nrc.run('ipconfig /renew', { onData: commandConsoleOutput });
                await sleep(2000);
                this.setState({
                    message: this.state.message + "Renewed IP\n"
                });

                nrc.run('ipconfig /flushdns', { onData: commandConsoleOutput });
                await sleep(2000);
                this.setState({
                    message: this.state.message + "Flushed DNS\n"
                });

                let compassNeedleElement = document.getElementById("compass-needle");
                compassNeedleElement.className = "";
            };

            runWiFiFix();

            /* nrc.run('netsh winsock reset', { onData: commandConsoleOutput });
            nrc.run('netsh int ip reset', { onData: commandConsoleOutput });
            nrc.run('ipconfig /release', { onData: commandConsoleOutput });
            nrc.run('ipconfig /renew', { onData: commandConsoleOutput });
            nrc.run('ipconfig /flushdns', { onData: commandConsoleOutput }); */
    } //fixWiFi()

   /* else {
        console.log("More than one click  -- not executing.");
    } */
        console.log("After fixWiFi():\t" + this.state.clicks);
        return;
        
    } //endFixWiFi method

   spinNeedle = () => {
        console.log("spinNeedle():\t\n");

        let compassNeedleElement = document.getElementById("compass-needle");
        compassNeedleElement.className += "needle-rotate";

        this.fixWiFi();
    } //

    componentDidMount = () => {
    }  

    render = () => {
        return (
            <section className="wiFi-magic">
                <img src={ this.compassNeedle } onClick={ this.spinNeedle } className="" id="compass-needle" alt="Compass Needle" />
                <img src={ this.compassBody } className="" id="compass-body" alt="Compass Body" />
                <p id="compass-message">{ this.state.message }</p>
            </section>
        );
    } //end render()
    
} //end WiFiMagic class

export default WiFiMagic;

