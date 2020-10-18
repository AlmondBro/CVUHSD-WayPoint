//To use ES6 code (like import) in the electron main process, compile it first with esm.
var path = require("path");
var appRoot = path.join(__dirname, '..');

// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module/*, options*/);
module.exports = require('./electron-starter.js');