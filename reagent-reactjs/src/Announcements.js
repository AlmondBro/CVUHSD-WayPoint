import React, { Component } from "react";
import { twitterHeader } from "../environment-variables/environment-variables.js"
class Annoucements extends Component {
    constructor() {
        super();
        this.state = {
            announcements: []
        };
    } //end constructor() method

    componentDidMount() {
        fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies", twitterHeader).then(results => {
            return results.json();
        }).then(data => {
            let annoucementTweets = data.results.map( (tweets)   => {
                return tweets.toString();
            })
            this.setState({
                announcements: annoucementTweets 
            });
            console.log("State:" + announcements );
        })
    }

    announcementHTMLBlock = ( 
        <section className="announcements-list">
            <img src="img/gallery-icon.png" className="img-responsive" alt="Gallery icon" />
            <div className="announcement-text">
                <h3>
                    { props.announcementTitle || "Earth Invaded by Aliens"}
                </h3>
                <p className="announcement-details">
                    { this.state.announcements || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida..."}
                </p>
            </div>
        </section>);

        render() {
            return announcementHTMLBlock;
        }
} //end Annoucements class

const annoucements = (props) => {
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