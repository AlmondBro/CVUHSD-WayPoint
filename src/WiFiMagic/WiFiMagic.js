import React, { useEffect, useState }  from 'react';
import Checkmark from "./../Checkmark.js";

const WiFiMagic = ({updateTitle, renderFooter}) => {
 
    let [ message, setMessage ] = useState("Click on the compass");
    let [ clicks, setClicks ] = useState(0);

    const pageTitle = "Wi-Fi Magic",
        wifiIconSrc = "./img/icon-wifi.png",
        compassNeedle = "./img/compass-needle.svg",
        compassBody = "./img/compass-body.svg";

    //  Do this only when not using arrow function.
    //  this.fixWiFi = this.fixWiFi.bind(this);
    //  this.spinNeedle = this.spinNeedle.bind(this);

  //  this.runWiFiFix = this.runWiFiFix.bind(this);

   /* incrementClick() {
       return this.state.click++;
    } */
    //  https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies
    //  fixWiFi = () =>
    //  fixWiFi()

    const fixWiFi = () => {
        const nrc = window.require("node-run-cmd");
        
        if (clicks === 0 ) {
            setClicks(clicks+1);

            console.log("First click");

            let compassNeedleElement = document.getElementById("compass-needle");
            let compassMessage = document.getElementsByClassName("compass-message");

            let checkmark = document.getElementsByClassName("checkmark");

            let showCheckmark = () => {
                for (var i = 0; i < checkmark.length; i++) {
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
                return new Promise(resolve=> {
                    setTimeout(resolve,milliseconds);
                });
            } //end sleep()

            const commandConsoleOutput = (data) => {
                console.log("Data:\t" + data);
            };

            const runWiFiFix = async () => {
                let compassNeedleElement = document.getElementById("compass-needle");

                console.log("runWiFiFix():\t");
  
                nrc.run("netsh winsock reset", { onData: commandConsoleOutput });
              
                setMessage("Reset Windows socket");
               
                loadTextFX();
                showCheckmark();
                await sleep(2000);
                
                nrc.run('netsh int ip reset', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();

                setMessage("\n" + message + "Reset IP\n\n");
                await sleep(2000);

                nrc.run('ipconfig /release', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
                setMessage("\n" + message + "Released IP\n\n");

                await sleep(2000);

                nrc.run('ipconfig /renew', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
                setMessage("\n" + message + "Renewed IP\n\n");

                await sleep(2000);

                nrc.run('ipconfig /flushdns', { onData: commandConsoleOutput });
                loadTextFX();
                showCheckmark();
                setMessage("\n" + message + "Flushed DNS\n\n");

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
        console.log("After fixWiFi():\t" + clicks);
        return;
    } //endFixWiFi() method
 
    useEffect(() => {
       updateTitle(pageTitle);
       renderFooter(false);
    }, []);

    return ( 
        <section className="wiFi-magic">
            <div id="wholeCompass" >
                <img src={ compassNeedle } className="" id="compass-needle" alt="Compass Needle" onClick={ fixWiFi }  />
                <img src={ compassBody } className="" id="compass-body" alt="Compass Body"  onClick={ fixWiFi } />
            </div>
            <div className="wifiMagic-messages">
            { message.split("\n").map( (message, key) => { 
                    return  ( 
                                <Checkmark    
                                    key     =   {key.toString() } 
                                    message =   {message}
                                > 
                                    { message }
                                </Checkmark> 
                            );
                }) 
            }
            </div> 
        </section>
    ); //end return()
}; //end WiFiMagic class

export default WiFiMagic;

