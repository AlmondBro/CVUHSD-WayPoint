import React from "react";
import PropTypes from "prop-types"; // ES6

const Notification = (props) => {
    return (
        <div className="notification-content-rectangle-container">
            <hr/>
            <div className="update-notification notification-content-rectangle">
                { props.urgent ? <button id="exclamation-button">!</button> : <i className={props.faIconClassName} aria-hidden="true"></i> }
                <p className="notificationsText">{props.notificationText}</p>
            </div>
            <hr/>
        </div>
    ); //end return
} //end Notifications()


Notification.propTypes = {
    urgent: PropTypes.bool, 
    faIconClassName: PropTypes.string,
    notificationText: PropTypes.string.isRequired
};


export default Notification;