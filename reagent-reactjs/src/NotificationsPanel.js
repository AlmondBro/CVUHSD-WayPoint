import React from "react";

const notificationsPanel = (props) => {
    return (
    <section className="notifications-section">
        <h4 className="inline">Notifications</h4>
        <button className="inline redToDarkRedgradient clickable" id="clear-button">Clear</button>
        <div className="notifications-content">
            <div className="notification-content-rectangle-container">
                <hr/>
                <div className="update-notification notification-content-rectangle">
                    <button id="exclamation-button">!</button>
                    <p>Update Required</p>
                </div>
                <hr/>
            </div>

            <div className="notification-content-rectangle-container">
                <hr/>
                <div className="update-notification notification-content-rectangle">
                    <i className="fa fa-check greenCheck" aria-hidden="true"></i>
                    <p>No Helpdesk Requests</p>
                </div>
                <hr/>
            </div>

            <div className="notification-content-rectangle-container">
                <hr/>
                <div className="update-notification notification-content-rectangle">
                    <i className="fas fa-archive archive"></i>
                    <p>10 files</p>
                </div>
                <hr/>
            </div>

            <div className="notification-content-rectangle-container">
                <hr/>
                <div className="update-notification notification-content-rectangle">
                    <i className="fas fa-coffee coffee"></i>
                    <p>Coffee Taken</p>
                </div>
                <hr/>
            </div>
        </div>
        <div className="blur-effect" id="notifications-blur-effect"></div>
    </section>
    );
};

export default notificationsPanel;