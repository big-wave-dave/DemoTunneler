// Demo Tunneler is a module to let you expose localhost in any server.
var DemoTunneler = module.exports = {};

var localtunnel = require('localtunnel');

// Create the constructor. It accepts two args, a port and a custom subdomain.
DemoTunneler.drill = function(port, customsub) {
  // Let's create an instance of localtunnel
  var tunnel = localtunnel(port, {subdomain:customsub}, function(err, tunnel){
    if(err) {
      console.log("Error: " + err);
    }
    console.log("Your URL is " + tunnel.url);

    // Make sure your custom subdomain is available. If not, kill the process and try again.
    // I may potentially expand this to go through a list and try other custom subdomains
    if(tunnel.url != ("https://" + customsub + ".localtunnel.me")) {
      console.log("Tunnel custom sub unnavailable. Killing process and trying again.\n");
      process.exit();
    }
  });
  tunnel.close();
}

// I may also potentially implement some username/password or demo key functionality




















// Atom whitespace config
