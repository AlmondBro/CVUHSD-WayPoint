import React, { Component } from "react";
import BackButton from "./BackButton.js";

class Header extends Component {
    render() {
        return( 
                 <header class="header-frame redToDarkRedgradient">
                <input type="checkbox" class="checkbox-hack" id="notification-icon-checkbox" />
                <section class="redToDarkRedgradient">
                    <a href="#"><img src="https://portal.centinela.k12.ca.us/images/CV-600x600.png" class="img-responsive" id="reagentLogo" alt="Centinela Valley Union High School District Logo" /></a>
                    <h1>
                        <img src="img/wp-logo.svg" class="headerLogo" alt="Waypoint" />
                    </h1>

                    <label class="notificationIcon clickable" id="notification-icon" for="notification-icon-checkbox">
                        <span class="notifications-count">1</span>
                        <i class="fas fa-bell notification-icon-i"></i>
                    </label>
                </section>

                <section class="notifications-section">
                    <h4 class="inline">Notifications</h4>
                    <button class="inline redToDarkRedgradient clickable" id="clear-button">Clear</button>
                    <div class="notifications-content">
                        <div class="notification-content-rectangle-container">
                            <hr/>
                            <div class="update-notification notification-content-rectangle">
                                <button id="exclamation-button">!</button>
                                <p>Update Required</p>
                            </div>
                            <hr/>
                        </div>

                        <div class="notification-content-rectangle-container">
                            <hr/>
                            <div class="update-notification notification-content-rectangle">
                                <i class="fa fa-check greenCheck" aria-hidden="true"></i>
                                <p>No Helpdesk Requests</p>
                            </div>
                            <hr/>
                        </div>

                        <div class="notification-content-rectangle-container">
                            <hr/>
                            <div class="update-notification notification-content-rectangle">
                                <i class="fas fa-archive archive"></i>
                                <p>10 files</p>
                            </div>
                            <hr/>
                        </div>

                        <div class="notification-content-rectangle-container">
                            <hr/>
                            <div class="update-notification notification-content-rectangle">
                                <i class="fas fa-coffee coffee"></i>
                                <p>Coffee Taken</p>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div class="blur-effect" id="notifications-blur-effect"></div>
                </section>

                <BackButton />
            </header>
        );
    }
}

export default Header;