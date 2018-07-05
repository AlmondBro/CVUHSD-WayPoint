import React, { Component } from "react";
import electronFetch from "electron-fetch";
import { twitterHeader, options } from "./environment-variables.js";
const fetchTimeline = require('fetch-timeline');
//import { http } from "https";
//var http = require("https");
var $ = require("jquery");
var Twitter = require('twitter');

class Annoucements extends Component {
    constructor() {
        super();
        this.state = {
            announcements: []
        };
    } //end constructor() method

    FetchAPI() {
        /*  var client = new Twitter({
            consumer_key: 'qJerGzOGCdesoxK58myYJKk5R',
            consumer_secret: 'xC0uP0g8EN0qD9r4WDytDKfTX4zEL7UscsBHbdHn4fKpdx0CV9',
            access_token_key: '1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb',
            access_token_secret: 'RQ0ZdeHHxgeD8J3Php18n78rxDK8PN1oMZslwAnJKGowP'
          });

          var params = {screen_name: 'cvuhsdnews'};
            client.get('statuses/user_timeline', params, function(error, tweets, response) {
                console.log("Twitter NPM");
                if (!error) {
                    console.log(tweets);
                }
            });*/
            
       fetch("https://cryptic-headland-94862.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies", twitterHeader).then(results => {
            return results.json();
        }).then(data => {
            let annoucementTweets = data.results.map( (tweets) => {
                console.log("Tweets:\t" + tweets)
                return tweets.toString();
            })
            this.setState({
                announcements: annoucementTweets 
            }.catch(function() {
                // This is where you run code if the server returns any errors
             }));
            console.log("State:" + annoucementTweets );
        }); 

        /*
        electronFetch("https://cryptic-headland-94862.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies", {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            crossDomain: true,
            mode: "no-cors",
            "Access-Control-Allow-Origin": "*",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Authorization": "Basic " + btoa("qJerGzOGCdesoxK58myYJKk5R" + ":" + "xC0uP0g8EN0qD9r4WDytDKfTX4zEL7UscsBHbdHn4fKpdx0CV9")
            },
            redirect: 'follow', // (/!\ only works when running on Node.js) set to `manual` to extract redirect headers, `error` to reject redirect

            // The following properties are electron-fetch extensions
            follow: 20,         // (/!\ only works when running on Node.js) maximum redirect count. 0 to not follow redirect
            timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
            size: 0,            // maximum response body size in bytes. 0 to disable
           // session: session.fromPartition('electron-fetch'), // (/!\ only works when running on Electron) Electron Session object.,
            //useElectronNet: true, // When running on Electron, defaults to true. On Node.js, defaults to false and cannot be set to true.
            user: undefined,    // When running on Electron behind an authenticated HTTP proxy, username to use to authenticate
            password: undefined // When running on Electron behind an authenticated HTTP proxy, password to use to authenticate
        })
            .then(res => res.text())
            .then(body => console.log(body)); 
        */
        /*
        var data = null;
         var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("Response:\t:" + this.responseText);
        }
        });

        xhr.open("GET", "https://cryptic-headland-94862.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies");
        xhr.setRequestHeader("Authorization", "OAuth oauth_consumer_key=\\\"qJerGzOGCdesoxK58myYJKk5R\\\",oauth_token=\\\"1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb\\\",oauth_signature_method=\\\"HMAC-SHA1\\\",oauth_timestamp=\\\"1529937082\\\",oauth_nonce=\\\"W1e5hvBg9rc\\\",oauth_version=\\\"1.0\\\",oauth_signature=\\\"n62S2b6kiM9S9st3SIehBIXfHV8%3D\\\"");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "3fd18140-39cc-46c0-b92e-d7989ef69983");

        xhr.send(data); 
        var options = options; 
        var req = http.request(options, function (res) {
            var chunks = [];
          
            res.on("data", function (chunk) {
              chunks.push(chunk);
            });
          
            res.on("end", function () {
              var body = Buffer.concat(chunks);
              console.log(body.toString());
            });
          });
          
          req.end(); */
          /*
          const params = {
            screenName: 'cvuhsdnews',
            count: 200
          }
          
          const opts = {
            credentials: {
              consumerKey: "qJerGzOGCdesoxK58myYJKk5R",
              consumerSecret: "xC0uP0g8EN0qD9r4WDytDKfTX4zEL7UscsBHbdHn4fKpdx0CV9",
              accessToken: "1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb",
              accessTokenSecret: "RQ0ZdeHHxgeD8J3Php18n78rxDK8PN1oMZslwAnJKGowP"
            },
            limit: 3200,
            limitDays: 7
          }
          
          const stream = fetchTimeline(params, opts); // => Readable Stream
          
          stream.on('data', (tweet, index) => {
            console.log(`#${++index} ${tweet.text}`)
          }); */
    } 

    componentDidMount() {
        this.FetchAPI();
    }

        render() {
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

export default Annoucements;