var checkConfig = module.exports = {};

// Interact with our files
var fs = require("fs");
var Q = require('q');

// First thing that needs to be done is to establish what all needs to be taken from a config file.
// We need a json object that resembles this:
// Make these unalterable defaults for if the user messes up.
const PATH_TO_DT_CONFIG = "./DemoTunneler/dtconfig.json";
const DEFAULT_DT_CONFIG = `{
	"port": "7331",
	"customsub": "customSubdomainToDrillThrough",
	"entryPoint": "./example.app.js"
}\n`;
var dtconfig = JSON.parse(DEFAULT_DT_CONFIG);



checkConfig.getDtConfig = function() {
    // Check to see if dt.config exists and create it if it doesn't.
    if(fs.existsSync(PATH_TO_DT_CONFIG)) {
        console.log("dtconfig.json found, proceeding with execution.");
    }
    else {
        console.log("dtconfig.json not found. Create dtconfig.json from example.dtconfig.json.");
        // Create dt.config and write the default parameters to it.
    }
}


















// Atom whitespace config nonsense
