import React from "react";
import PropTypes from "prop-types"; // ES6

const Notification = (props) => {
    let index = props.index;
    return (
        <div className="notification-content-rectangle-container">
            <hr/>
            <div className="update-notification notification-content-rectangle">
                { props.urgent ? <button id="exclamation-button">!</button> : <i className={props.faIconClassName} aria-hidden="true"></i> }
                { (props.image && !props.urgent) ? <img src={`./img/buttons/${props.image}.png` } className="notificationMonitorImage" /> : null }
                <p className="notificationsText">{props.notificationText}</p>
                <button className="fa fa-times removeNotification" 
                        aria-hidden="true" 
                        onClick={ () => { 
                                        console.log("Remove notificatiob clicked");
                                        props.removeNotification(index);
                                } 
                        }>
                </button>
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