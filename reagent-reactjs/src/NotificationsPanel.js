import React from "react";

//Import required external components
import Notification from "./Notification.js";

//Import utility function(s)
import { popNotification, requireNodeJSmodule } from "./utilityFunctions.js";

const NotificationsPanel = (props) => {
        return (
            <section className="notifications-section">
                <h4 className="inline">Notifications</h4>
                {/* for future implementation, if there are notifications: use an add button: */
                    /* */
                }
                { props.noNotifications ? null : 
                                                <button className="inline redToDarkRedgradient clickable" 
                                                        id="clear-button" 
                                                        onClick={ props.clearNotifications }>Clear</button> 
                }
                <div className="notifications-content">
                    {
                        !props.noNotifications ? 
                        props.notifications.map( (notification, i) => <Notification key={i} 
                                                                            urgent={notification.urgent} 
                                                                            notificationText={notification.notificationText} 
                                                                            faIconClassName={notification.faIconClassName}
                                                                            image={notification.image} 
                                                                            removeNotification={props.removeNotification}/> 
                                                    ) : <p>No notifications <span role="img" aria-label="Happy emoji">😀</span></p> 
                    }
                </div>
                <div className="blur-effect" id="notifications-blur-effect"></div>
            </section>
        ); //end return
}; //end NotificationsPanel()


export default NotificationsPanel;