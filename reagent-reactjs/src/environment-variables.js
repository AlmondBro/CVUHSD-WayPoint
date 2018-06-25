
import fetch from "electron-fetch";
const env_Variables = () => {
    const headers = {
        twitterAPI_Header: {
            method: "GET",
            
           /* headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Authorization": "Basic " + btoa("qJerGzOGCdesoxK58myYJKk5R" + ":" + "xC0uP0g8EN0qD9r4WDytDKfTX4zEL7UscsBHbdHn4fKpdx0CV9")
            }, */

            "headers": {
                "Authorization": "OAuth oauth_consumer_key=\\\"qJerGzOGCdesoxK58myYJKk5R\\\",oauth_token=\\\"1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb\\\",oauth_signature_method=\\\"HMAC-SHA1\\\",oauth_timestamp=\\\"1529963027\\\",oauth_nonce=\\\"eGJbICbVT06\\\",oauth_version=\\\"1.0\\\",oauth_signature=\\\"4uP4OuSqhE8c%2BCyhWaP1bPmoYEU%3D\\\"",
                "Cache-Control": "no-cache",
                "Postman-Token": "dc2c7cef-174a-425c-a074-6f7b4c1e12c8"
              }, 
            redirect: 'follow', // (/!\ only works when running on Node.js) set to `manual` to extract redirect headers, `error` to reject redirect

            // The following properties are electron-fetch extensions
            follow: 20,         // (/!\ only works when running on Node.js) maximum redirect count. 0 to not follow redirect
            timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
            size: 0,            // maximum response body size in bytes. 0 to disable
            //session: session.fromPartition('electron-fetch'), // (/!\ only works when running on Electron) Electron Session object.,
            useElectronNet: true, // When running on Electron, defaults to true. On Node.js, defaults to false and cannot be set to true.
            user: undefined,    // When running on Electron behind an authenticated HTTP proxy, username to use to authenticate
            password: undefined // When running on Electron behind an authenticated HTTP proxy, password to use to authenticate
        }
    };
   return headers;
};

/* 
mode: "no-cors",
body: undefined, 
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*"
*/


var headers = {
    "Authorization": "OAuth oauth_consumer_key=\\\"qJerGzOGCdesoxK58myYJKk5R\\\",oauth_token=\\\"1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb\\\",oauth_signature_method=\\\"HMAC-SHA1\\\",oauth_timestamp=\\\"1529963027\\\",oauth_nonce=\\\"eGJbICbVT06\\\",oauth_version=\\\"1.0\\\",oauth_signature=\\\"4uP4OuSqhE8c%2BCyhWaP1bPmoYEU%3D\\\"",
    "Cache-Control": "no-cache",
    "Postman-Token": "89a577db-72b9-4fa5-81f3-e748f33d0ec6"
  }

var options = {
    "method": "GET",
    "hostname": [
      "api",
      "twitter",
      "com"
    ],
    "path": [
      "1.1",
      "statuses",
      "user_timeline.json"
    ],
    "headers": {
      "Authorization": "OAuth oauth_consumer_key=\\\"qJerGzOGCdesoxK58myYJKk5R\\\",oauth_token=\\\"1009812887542480897-Xo6SIpvFc6CuWvTJIwERNTZVIvT2nb\\\",oauth_signature_method=\\\"HMAC-SHA1\\\",oauth_timestamp=\\\"1529963027\\\",oauth_nonce=\\\"eGJbICbVT06\\\",oauth_version=\\\"1.0\\\",oauth_signature=\\\"4uP4OuSqhE8c%2BCyhWaP1bPmoYEU%3D\\\"",
      "Cache-Control": "no-cache",
      "Postman-Token": "03f66fc4-79c7-4042-bc32-f7a734ae0ddb"
    }
  };

let twitterHeader = env_Variables().twitterAPI_Header;

export { twitterHeader, options };
