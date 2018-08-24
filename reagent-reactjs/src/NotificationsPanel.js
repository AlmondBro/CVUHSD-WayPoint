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

    renderNotifications = () => {
        console.log("render Notifications");
        console.log(JSON.stringify(this.state.notifications));
        for(let i = 0; i < this.state.notifications; i++) {
            console.log("note:\t" + this.state.notifications[i]);
            //return this.state.notifications[i];
            return  ( <Notification urgent={this.state.notifications[i].urgent} 
                                    notificationText={this.state.notifications[i].notificationText} 
                                    faIconClassName={this.state.notifications[i].faIconClassName} 
                        />);
        } //end for-loop
    }; //end renderNotifications

    clearNotifications = () => {
        this.setState({
            notifications: [""],
            noNotifications: true
        });
    }; //end clearNotifications()

    render = () => {
        return (
            <section className="notifications-section">
                <h4 className="inline">Notifications</h4>
                <button className="inline redToDarkRedgradient clickable" id="clear-button" onClick={ this.clearNotifications } >Clear</button>
                <div className="notifications-content">
                    {!this.state.noNotifications ? this.state.notifications.map( (notification) => <Notification urgent={notification.urgent} notificationText={notification.notificationText} faIconClassName={notification.faIconClassName} /> ) : <p>No notifications 😀</p> }
                </div>
                <div className="blur-effect" id="notifications-blur-effect"></div>
            </section>
        ); //end return
    }; //end render()
} //end NotificationsPanel

export default NotificationsPanel;