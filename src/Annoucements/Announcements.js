import React, { useState, useEffect } from "react";
const Annoucements = ({ updateTitle, renderFooter }) => {
    const pageTitle = "Announcements";
    
    const [ annoucements, setAnnouncements ] = useState([]);

    FetchAPI = () => {
    };  //end Fetch API()

    useEffect(() => {
        updateTitle(this.pageTitle);
        renderFooter(false);

        FetchAPI();
    }, []); //end componentDidMount()

    return  ( 
        <section className="announcements-list">
            <img src="img/gallery-icon.png" className="img-responsive" alt="Gallery icon" />
            <div className="announcement-text">
                <h3>
                    { announcements || "Earth Invaded by Aliens"}
                </h3>
                <p className="announcement-details">
                    { announcements || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida..."}
                </p>
            </div>
        </section>
    );
    
}; //end Annoucements class

export default Annoucements;

// const annoucements = (props) => {
//     //Future array to hold the announcements titles and text. Could be populated via an API call to twitter.
//     var infoArray = [];

//     const generateAnnouncements = (infoArray) => {
//         for (var i = 0; i < 7; i++) {
//            return announcementHTMLBlock;
//         }
//     };
//     return generateAnnouncements();
// };

