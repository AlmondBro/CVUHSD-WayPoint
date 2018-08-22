import React, {Component} from "react";

//Import required external components
import Notification from "./Notification.js";

class NotificationsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [""]
        };
    }
    render = () => {
        return (
            <section className="notifications-section">
                <h4 className="inline">Notifications</h4>
                <button className="inline redToDarkRedgradient clickable" id="clear-button">Clear</button>
                <div className="notifications-content">
                    <Notification urgent={true} notificationText="Update Required" />
    
                    <Notification urgent={false} notificationText="No HelpDesk Requests" faIconClassName="fa fa-check greenCheck" />
    
                    <Notification urgent={false} notificationText="10 files" faIconClassName="fas fa-archive archive" />
    
                    <Notification urgent={false} notificationText="Coffee Taken" faIconClassName="fas fa-coffee coffee" />
                </div>
                <div className="blur-effect" id="notifications-blur-effect"></div>
            </section>
        ); //end return
    }; //end render()
} //end NotificationsPanel

export default NotificationsPanel;