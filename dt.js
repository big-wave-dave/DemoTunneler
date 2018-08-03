// Interact with our files
var fs = require("fs");
var Q = require("q");
var express = require("express");
var pm2 = require('pm2');

var DemoTunneler = require("./DemoTunneler/DemoTunneler.js");
var checkConfig = require("./DemoTunneler/checkConfig.js")

var dtconfig = {};
var app = express(); // Create the express server object

// First thing that needs to be done is to establish what all needs to be taken from a config file.
Q.fcall(checkConfig.getDtConfig)
// Now that we've either verified or created the config file, we need to use it to start localtunnel
.then(setDefaults)
.then(startDrilling)
.done(debug);
// Now that we've started our localtunnel, we need to start the app with pm2. We expect it passed as an arg to dt.js

function getDtConfig() {
    checkConfig.getDtConfig();
}

function setDefaults() {
    dtconfig = require("./DemoTunneler/dtconfig.json");
}

function startDrilling() {
    DemoTunneler.drill(dtconfig.port,dtconfig.customsub);
    startListening();
}

function startListening() {
    var entryPoint = require(dtconfig.entryPoint);
}

function debug() {
    return console.log(`Value of dtconfig entry point: ${dtconfig.entryPoint}\n`);
}














// Atom whitespace config nonsense
