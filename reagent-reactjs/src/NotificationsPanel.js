import React, {Component} from "react";

//Import required external components
import Notification from "./Notification.js";

let notificationObject = (urgent, notificationText, faIconClassName) => {
    return (<Notification urgent={urgent} notificationText={notificationText} faIconClassName={faIconClassName} />)
};

// new notificationObject(true, "Update Required")
class NotificationsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [{urgent: true, notificationText: "Update required"}],
            noNotifications: false
        };
    }

    addNotification = (urgent, notificationText, faIconClassName) => {
        this.setState({
            notifications: this.state.notifications.concat({
                urgent: urgent,
                notificationText: notificationText,
                faIconClassName: faIconClassName
            }),
            noNotifications: false
        });

        new Notification("New Notification", {
            body: notificationText
        }); 
        
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