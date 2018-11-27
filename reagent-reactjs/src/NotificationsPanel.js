import React, {Component} from "react";

//Import required external components
import Notification from "./Notification.js";

//Import utility function(s)
import { popNotification, requireNodeJSmodule } from "./utilityFunctions.js";

class NotificationsPanel extends Component {
    constructor(props) {
        super(props); //Pass props to parent Component() constructor
        this.state = {
            notifications: [
                                {   
                                    urgent: true, 
                                    notificationText: "Update required" 
                                },
                                {   urgent: false, 
                                    notificationText: "No HelpDesk Requests",
                                    faIconClassName: "fa fa-check greenCheck"  
                                },
                                {   urgent: false, 
                                    notificationText: "10 files",
                                    faIconClassName: "fas fa-archive archive"  
                                },
                                {   urgent: false, 
                                    notificationText: "Coffee Taken",
                                    faIconClassName: "fas fa-coffee coffee"  
                                }
                           ],
            noNotifications: false
        };
    } //end contructor()

    componentDidMount = () => {
        //let Notification = window.require("electron").remote.Notification;
        const { ipcMain } = requireNodeJSmodule("electron");
       /*
       let myNotification = new window.Notification( "Hi", {
            body: "Authenticated"
            });
        */
    }

    addNotification = (urgent, notificationText, faIconClassName) => {
        console.log("Testing Notifications");
        /* 
            Other way to add to array in state, using ES6 spread operator:
            this.setState(previousState => ({
            myArray: [...previousState.myArray, 'new value']
            }));

               // Append an array
        const newArr = [1,2,3,4]
        this.setState({ arr: [...this.state.arr, ...newArr] });

        // Append a single item
        this.setState({ arr: [...this.state.arr, 'new item'] });
        */
      
       /*
        var electron = window.require("electron");
       var remote  = electron.remote;
       var vex = remote.require("vex-js");
       vex.registerPlugin(remote.require("vex-dialog"));
       vex.defaultOptions.className = "vex-theme-os"; //*/
        
       document.vexJS.dialog.open({
        message: 'Enter your username and password:',
        input: [
            '<input name="username" type="text" placeholder="Username" required />',
            '<input name="password" type="password" placeholder="Password" required />'
        ].join(''),

        callback: (data) => {
            if (!data) {
                console.log('Cancelled')
            } else {
                console.log('Username', data.username, 'Password', data.password)
                var electron = window.require("electron");
                var remote  = electron.remote;

                var ActiveDirectory = remote.require('activedirectory');
                var config = {  url: 'ldap://centinela.k12.ca.us',
                                baseDN: "dc=centinela.k12.ca,dc=us",
                                username: data.username + "@centinela.k12.ca.us",
                                password: data.password }

                var ad = new ActiveDirectory(config);

                ad.authenticate(data.username + "@centinela.k12.ca.us", data.password, (err, auth) => {
                    if (err) {
                      console.log("Authentication ERROR: " +JSON.stringify(err));
                      return;
                    }
                    
                    if (auth) {
                      console.log('Authenticated!');

                      popNotification("Authenticated!", "Correct username and password");
                      
                      let myNotification = new window.Notification('Authenticated', {
                        body: 'Authenticated'
                        });

                        myNotification.addEventListener("click", () => {
                            console.log('Notification clicked')
                          }); 

                        //myNotification();
                    }
                    else {
                      console.log('Authentication failed!');
                    }
                  });

                  var groupName = 'CV_IT';
                  ad.isUserMemberOf(data.username + "@centinela.k12.ca.us", groupName, function(err, isMember) {
                    if (err) {
                      console.log('isUserMemberOf ERROR: ' +JSON.stringify(err));
                      return;
                    }
                   
                    console.log(data.username + ' isMemberOf ' + groupName + ': ' + isMember);
                  });

            }
        }
    });
       
    this.setState({
        notifications: this.state.notifications.concat({
            urgent: urgent,
            notificationText: notificationText,
            faIconClassName: faIconClassName
        }),
        noNotifications: false
    }); // */

        /* // Dialog Electron module
        const {dialog} = window.require("electron").remote;

        const dialogOptions = {
            type: "question", 
            buttons: ["Enter", "Cancel"], 
            message: "Please login to your AD account."
        };

        dialog.showMessageBox(dialogOptions, (response) => {

        });
        */

    }; //end clearNotifications()

    clearNotifications = () => {
        this.setState({
            notifications: [],
            noNotifications: true
        });
    }; //end clearNotifications()

    render = () => {
        return (
            <section className="notifications-section">
                <h4 className="inline">Notifications</h4>
                {/* for future implementation, if there are notifications: use an add button: */
                    /* */
                }
                { this.state.noNotifications ? null : 
                                                <button className="inline redToDarkRedgradient clickable" 
                                                        id="clear-button" 
                                                        onClick={ this.clearNotifications } >Clear</button> 
                }
                <div className="notifications-content">
                    {
                        !this.state.noNotifications ? 
                        this.state.notifications.map( (notification, i) => <Notification key={i} 
                                                                            urgent={notification.urgent} 
                                                                            notificationText={notification.notificationText} 
                                                                            faIconClassName={notification.faIconClassName} /> 
                                                    ) : <p>No notifications <span role="img" aria-label="Happy emoji">😀</span></p> 
                    }
                </div>
                <div className="blur-effect" id="notifications-blur-effect"></div>
            </section>
        ); //end return
    }; //end render()
} //end NotificationsPanel

export default NotificationsPanel;