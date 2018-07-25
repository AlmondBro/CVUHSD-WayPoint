import React, { Component } from "react";
import NotificationsPanel from "./NotificationsPanel.js";
import BackButton from "./BackButton.js";

class Header extends Component {
    render() {
        return( 
            <header className="header-frame redToDarkRedgradient">
                <input type="checkbox" className="checkbox-hack" id="notification-icon-checkbox" />
                <section className="redToDarkRedgradient">
                    <a><img src="https://portal.centinela.k12.ca.us/images/CV-600x600.png" className="img-responsive" id="reagentLogo" alt="Centinela Valley Union High School District Logo" /></a>
                    <h1>
                        <img src="img/wp-logo.svg" className="headerLogo" alt="Waypoint" />
                    </h1>

                    <label className="notificationIcon clickable" id="notification-icon" htmlFor="notification-icon-checkbox">
                        {/* <span className="notifications-count">1</span> */}
                        <div id="button-menu">
                            <img src="img/icon-hamburger.png" title="Open Notification Menu" alt="Hamburger Menu" />
                        </div>
                    </label>
                </section>

                <NotificationsPanel />
                <BackButton />
        </header>
        );
    }
}

export default Header;