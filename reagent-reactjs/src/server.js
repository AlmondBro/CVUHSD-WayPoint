let expressServer = () => {
    const express = window.require("electron").remote.require('express');
    const cors = window.require("electron").remote.require("cors");
    const app = express();
    //

    console.log("Server.js");
    const port = 4000;

    app.use(cors());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
        res.setHeader('Access-Control-Allow-Origin', '*');


        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        res.setHeader('Access-Control-Allow-Credentials', true);
        
        next();
    });

    app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
    });

    app.listen(port, () => console.log(`Listening on port ${port}`)); 
}; //expressServer

let corsAnywhere = () => {
  console.log("CORS Anywhere()");
  // Listen on a specific host via the HOST environment variable
  var host = process.env.HOST || '0.0.0.0';
  // Listen on a specific port via the PORT environment variable
  var port = process.env.PORT || 4000;

  var cors_proxy = window.require('cors-anywhere');
  cors_proxy.createServer({
      originWhitelist: [], // Allow all origins
      requireHeader: ['origin', 'x-requested-with'],
      removeHeaders: ['cookie', 'cookie2']
  }).listen(port, host, function() {
      console.log('Running CORS Anywhere on ' + host + ':' + port);
  });

  (function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
  })();
};

export {corsAnywhere, expressServer};