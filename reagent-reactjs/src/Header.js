import React from "react";

//Import required external components
import NotificationsPanel from "./NotificationsPanel.js";
import BackButton from "./BackButton.js";

window.eval = global.eval = () => {
    console.error(`Sorry, this app does not support window.eval() for security purposes.`);
    return -1;
}; 

const Header = (props) => {
        return( 
            <header className="header-frame redToDarkRedgradient noHighlight noDrag">
                <input type="checkbox" className="checkbox-hack" id="notification-icon-checkbox" />
                <section className="redToDarkRedgradient">
                    <a><img src="./img/CV-600x600.png" className="img-responsive" id="reagentLogo" alt="CVUHSD Logo" /></a>
                    <h1>
                        <img src="img/wp-logo.svg" className="headerLogo noDrag" alt="Waypoint" />
                    </h1>

                    <label className="notificationIcon clickable noHighlight noDrag" id="notification-icon" htmlFor="notification-icon-checkbox">
                        {/* <span className="notifications-count">1</span> */}
                        <div id="button-menu" className="noHighlight noDrag">
                            <img src="img/icon-hamburger.png" title="Open Notification Menu" alt="Hamburger Menu" className="noHighlight noDrag" />
                        </div>
                    </label>
                </section>

                <NotificationsPanel addNotification={props.addNotification } removeNotification={props.removeNotification} clearNotifications={props.clearNotifications} notifications={props.notifications} noNotifications={props.noNotifications} />
                <BackButton />
        </header>
        );
}

export default Header;