//To use ES6 code (like import) in the electron main process, compile it first with electron-compile.
var path = require("path");
var appRoot = path.join(__dirname, '..');

require('electron-compile').init(appRoot, require.resolve('./electron-starter.js'));