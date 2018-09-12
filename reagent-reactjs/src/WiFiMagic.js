import React, {Component} from "react";
import Checkmark from "./Checkmark.js";

class WiFiMagic extends Component {
    constructor(props) {
        super(props);
        this.pageTitle= "Wi-Fi Magic";
        this.wifiIconSrc = "./img/icon-wifi.png";
        this.compassNeedle = "./img/compass-needle.svg";
        this.compassBody = "./img/compass-body.svg";

        //  Do this only when not using arrow function.
        //  this.fixWiFi = this.fixWiFi.bind(this);
        //  this.spinNeedle = this.spinNeedle.bind(this);

      //  this.runWiFiFix = this.runWiFiFix.bind(this);
        this.state = {
            message: "Click on the compass.",
            clicks: 0
        }; //end state
    } //end constructor

   /* incrementClick() {
       return this.state.click++;
    } */
    //  https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies
    //  fixWiFi = () =>
    //  fixWiFi()

    fixWiFi = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const nrc = remote.require("node-run-cmd");
        
        if (this.state.clicks === 0 ) {
            this.setState( { clicks: this.state.clicks+1 } );

            console.log("First click");

            let compassNeedleElement = document.getElementById("compass-needle");
            //let textFX = document.getElementsByClassName("loading-message");
            let compassMessage = document.getElementsByClassName("compass-message");

            let checkmark = document.getElementsByClassName("checkmark");

            let showCheckmark = () => {
                for (var i=0; i < checkmark.length; i++) {
                    checkmark[i].style.display = "inline-block";
                }
            }

            let loadTextFX = () => {
                for (var i=0; i < compassMessage.length; i++) {
                    compassMessage[i].classList.add("message-loading");
                }
            }

            compassNeedleElement.className += "needle-rotate";

            const sleep = (milliseconds) => {
                return new Promise(resolve=>{
                    setTimeout(resolve,milliseconds);
                });
            } //end sleep()

            const commandConsoleOutput = (data) => {
                console.log("Data:\t" + data);
            };

            const runWiFiFix = async () => {
                console.log("runWiFiFix():\t");
  
                nrc.run("netsh winsock reset", { onData: commandConsoleOutput });
                this.setState({
                    message: "Reset Windows socket\n" 
                });

                loadTextFX();
                showCheckmark();
                await sleep(2000);
                
                nrc.run('netsh int ip reset', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
                this.setState({
                    message: this.state.message + "Reset IP\n"
                });
                await sleep(2000);

                nrc.run('ipconfig /release', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
                this.setState({
                    message: this.state.message + "Released IP\n"
                });
                await sleep(2000);

                nrc.run('ipconfig /renew', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
                this.setState({
                    message: this.state.message + "Renewed IP\n"
                });
                await sleep(2000);

                nrc.run('ipconfig /flushdns', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
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

   else {
        console.log("More than one click  -- not executing.");
    } //end else-statement 
        console.log("After fixWiFi():\t" + this.state.clicks);
        return;
    } //endFixWiFi() method

   spinNeedle = () => {
        console.log("spinNeedle():\t\n");
        this.fixWiFi();
    } 
 
    componentDidMount = () => {
        this.props.updateTitle(this.pageTitle);
        this.props.renderFooter(false);
    }  

    render = () => {
        return ( 
            <section className="wiFi-magic">
                <div id="wholeCompass" >
                    <img src={ this.compassNeedle } className="" id="compass-needle" alt="Compass Needle" onClick={ this.spinNeedle }  />
                    <img src={ this.compassBody } className="" id="compass-body" alt="Compass Body"  onClick={ this.spinNeedle } />
                </div>
                <div className="wifiMagic-messages">
                { this.state.message.split("\n").map( (message, key) => { 
                        return (    <Checkmark key={key.toString() } message={message} >{ message }</Checkmark> );
                    }) }
                </div> 
              
            </section>
        );
    } //end render()
    
} //end WiFiMagic class

export default WiFiMagic;

