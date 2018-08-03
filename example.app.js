// Interact with our files
var fs = require("fs");
var express = require("express");
var dtconfig = require("./example.dtconfig.json");

var app = express();



// First thing that needs to be done is to establish what all needs to be taken from a config file.
app.get('/', function(req,res){
    res.send("Hello from example.app.js!\n" + (new Date()).getHours() + ":" + (new Date()).getMinutes() + "\n");
});

app.listen(dtconfig.port, function(){
    console.log(`Server is listening on port ${dtconfig.port}.\n`);
});










// Atom whitespace config nonsense
