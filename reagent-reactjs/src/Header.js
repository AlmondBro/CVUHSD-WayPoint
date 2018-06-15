import React, { Component } from "react";
import BackButton from "./BackButton.js";

class Header extends Component {
    render() {
        return( 
                 <header className="header-frame redToDarkRedgradient">
                <input type="checkbox" className="checkbox-hack" id="notification-icon-checkbox" />
                <section className="redToDarkRedgradient">
                    <a href="#"><img src="https://portal.centinela.k12.ca.us/images/CV-600x600.png" className="img-responsive" id="reagentLogo" alt="Centinela Valley Union High School District Logo" /></a>
                    <h1>
                        <img src="img/wp-logo.svg" className="headerLogo" alt="Waypoint" />
                    </h1>

                    <label className="notificationIcon clickable" id="notification-icon" for="notification-icon-checkbox">
                        <span className="notifications-count">1</span>
                        <i className="fas fa-bell notification-icon-i"></i>
                    </label>
                </section>

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

                <BackButton />
            </header>
        );
    }
}

export default Header;