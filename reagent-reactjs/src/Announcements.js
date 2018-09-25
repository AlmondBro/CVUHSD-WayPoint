import React, { Component } from "react";
import {corsAnywhere}  from "./server.js"; 

//import { http } from "https";
//var http = require("https");

var crypto = require('crypto');
var OAuth = require('oauth-1.0a');

class Annoucements extends Component {
    constructor(props) {
        super(props);
        this.pageTitle = "Announcements";
        this.state = {
            announcements: []
        };
    } //end constructor() method

    
    FetchAPI = () => {
        /*var client = new Twitter({
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
            }); */
        
    const oauth = OAuth({
        consumer: { key: 'yQpPcDCyb7cDctARjpIFG1fyK', secret: '4soLOc6J9MFW1fuW1GHCIwwMAwAgxwwOMkt8nthpuaRcQZHAPY'},
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            return crypto.createHmac('sha1', key).update(base_string).digest('base64');
        }
        });

        const request_data = {
            url: 'http://localhost:4000/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies',
            method: 'GET'
          };

        const token = {
            key: '1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb',
            secret: 'RQ0ZdeHHxgeD8J3Php18n78rxDK8PN1oMZslwAnJKGowP'
          };
        
          var request = require('request');
        request({
            url: request_data.url,
            method: request_data.method,
            form: request_data.data,
            headers: oauth.toHeader(oauth.authorize(request_data, token))
        }, function(error, response, body) {
            console.log(response.body);
        });

       /*fetch("http://localhost:4000/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cvuhsdnews&count=10&exclude_replies", oauth.toHeader(oauth_data)).then(results => {
            return results.json();
        }).then(data => {
            console.log("Data:\t:" + JSON.stringify(data));
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
        }); */
    } 

    openAuth = () => {
      /*  describe('OAuth1.0',function(){
            var OAuth = require('oauth');
           
            it('tests trends Twitter API v1.1',function(done){
              var oauth = new OAuth.OAuth(
                'https://api.twitter.com/oauth/request_token',
                'https://api.twitter.com/oauth/access_token',
                'yQpPcDCyb7cDctARjpIFG1fyK',
                '4soLOc6J9MFW1fuW1GHCIwwMAwAgxwwOMkt8nthpuaRcQZHAPY',
                '1.0A',
                null,
                'HMAC-SHA1'
              );
              oauth.get(
                'https://api.twitter.com/1.1/trends/place.json?id=23424977',
                '1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb', //test user token
                'RQ0ZdeHHxgeD8J3Php18n78rxDK8PN1oMZslwAnJKGowP', //test user secret            
                function (e, data, res){
                  if (e) console.error(e);        
                  console.log(require('util').inspect(data));
                  done();      
                });    
            });
          });*/
    }

    componentDidMount = () => {
        this.props.updateTitle(this.pageTitle);
        this.props.renderFooter(false);
        corsAnywhere();
        this.FetchAPI();
        //this.openAuth();
    }  

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

