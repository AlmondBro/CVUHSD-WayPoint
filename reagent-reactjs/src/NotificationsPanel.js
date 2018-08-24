import React, {Component} from "react";

//Import required external components
import Notification from "./Notification.js";

let notificationObject = (urgent, notificationText, faIconClassName) => {
    return (<Notification urgent={urgent} notificationText={notificationText} faIconClassName={faIconClassName} />)
};

// new notificationObject(true, "Update Required")
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

    addNotification = (urgent, notificationText, faIconClassName) => {
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
        });

        let windowsNotification = new Notification("New Notification", {
            body: "Hi"
        }); 

        const {dialog} = window.require('electron').remote

        const dialogOptions = {type: 'info', buttons: ['OK', 'Cancel'], message: 'Do it?'}

        dialog.showMessageBox(dialogOptions, i => console.log(i))

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

                { this.state.noNotifications ? <button className="inline redToDarkRedgradient clickable" 
                                                       id="add-button" 
                                                       onClick={ () => this.addNotification(false, "hello") }>Add</button> : 
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
                                                    ) : <p>No notifications 😀</p> 
                    }
                </div>
                <div className="blur-effect" id="notifications-blur-effect"></div>
            </section>
        ); //end return
    }; //end render()
} //end NotificationsPanel

export default NotificationsPanel;