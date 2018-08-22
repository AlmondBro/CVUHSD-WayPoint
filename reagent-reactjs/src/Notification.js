import React from "react";
import PropTypes from "prop-types"; // ES6

const Notification = (props) => {
    return(
        <div className="notification-content-rectangle-container">
            <hr/>
            <div className="update-notification notification-content-rectangle">
                { props.urgent ? <button id="exclamation-button">!</button> : <i className={props.faIconClassName} aria-hidden="true"></i> }
                <p>{props.notificationText}</p>
            </div>
            <hr/>
        </div>
    ); //end return
} //end Notifications()


Notification.propTypes = {
    urgent: PropTypes.bool, 
    faIconClassName: PropTypes.string,
    notificationText: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
};


export default Notification;