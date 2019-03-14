import React, { Component } from "react";
class Annoucements extends Component {
    constructor(props) {
        super(props);
        this.pageTitle = "Announcements";
        this.state = {
            announcements: []
        };
    } //end constructor() method

    FetchAPI = () => {
    };  //end Fetch API()

    componentDidMount = () => {
        this.props.updateTitle(this.pageTitle);
        this.props.renderFooter(false);
        this.FetchAPI();
        //this.openAuth();
    }; //end componentDidMount()

    render = () => {
            return  ( 
                <section className="announcements-list">
                    <img src="img/gallery-icon.png" className="img-responsive" alt="Gallery icon" />
                    <div className="announcement-text">
                        <h3>
                            { this.state.announcements || "Earth Invaded by Aliens"}
                        </h3>
                        <p className="announcement-details">
                            { this.state.announcements || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida..."}
                        </p>
                    </div>
                </section>);
        }
} //end Annoucements class

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

