import React from "react";

const annoucements = (props) => {
    const announcementHTMLBlock = ( 
    <section className="announcements-list">
        <img src="img/gallery-icon.png" className="img-responsive" alt="Gallery icon" />
        <div className="announcement-text">
            <h3>
                { props.announcementTitle || "Earth Invaded by Aliens"}
            </h3>
            <p className="announcement-details">
                { props.annoucementDetails || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida..."}
            </p>
        </div>
    </section>);

    //Future array to hold the announcements titles and text. Could be populated via an API call to twitter.
    var infoArray = [];

    const generateAnnouncements = (infoArray) => {
        for (var i = 0; i < 7; i++) {
           return announcementHTMLBlock;
        }
    };
    return generateAnnouncements();
};

export default annoucements;