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
    }; //end componentDidMount()

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
    this.setState({
        notifications: this.state.notifications.concat({
            urgent: urgent,
            notificationText: notificationText,
            faIconClassName: faIconClassName
        }),
        noNotifications: false
    }); //end this.setState()
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