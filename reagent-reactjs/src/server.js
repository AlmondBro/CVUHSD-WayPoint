let corsAnywhere = () => {
  console.log("CORS Anywhere()");
  // Listen on a specific host via the HOST environment variable
  var host = process.env.HOST || "0.0.0.0";
  // Listen on a specific port via the PORT environment variable
  var port = process.env.PORT || 4000;

  var cors_proxy = window.require("cors-anywhere");
  cors_proxy.createServer({
      originWhitelist: [], // Allow all origins
      requireHeader: ["origin", "x-requested-with"],
      removeHeaders: ["cookie", "cookie2"]
  }).listen(port, host, () => {
      console.log("Running CORS Anywhere on " + host + ":" + port);
  });
}; //corsAnywhere()

export { corsAnywhere };