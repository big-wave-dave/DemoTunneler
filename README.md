# README #

## What is this repository for? ##
Basically, this repo is for the DemoTunneler package I built. By including the require statement and the constructor in your main app.js file, your app is automatically exposed on the custom subdomain name you pass through as an arg when calling the DemoTunneler.drill(port,customsub) constructor.

## Version ##
This is version 1.0. While it's ready for production use, there are plenty of features to be added, like demo key, alt sub listing, sub squatting, and derandomizing alternate custom subs.

## How do I get set up? ##
Download the repo to your node_modules folder, then simply 'require' it in your main app entry point and call the constructor:

```javascript
var DemoTunneler = require('DemoTunneler');
DemoTunneler.drill(port,customsub);
```

You'll now see a console.log entry confirming your URL whenever you run your app. If your URL is not available for whatever the reason, DemoTunneler will kill your app instead of giving you a random URL.

_A future feature of DemoTunneler is it will retry your custom URL x times and then continue down of list of preapproved URL's you provide._

There's no need to configure DemoTunneler. All the configuration you need is performed when you call the DemoTunneler constructor.

## Dependencies
DemoTunneler depends on the NPM package "localtunnel", a bare bones tunneling package. 
> Note: While it doesn't yet depend on pm2, it's very highly recommended that you use pm2 alongside DemoTunneler. When domain squatting becomes a feature, pm2 will become a dependency.

## Features and Documentation ##
[Full documentation](https://bitbucket.org/big_wave_dave/demotunneler/wiki/Home).

## Misc ##

#### Contribution guidelines ####

* Writing tests
* Code review
* Other guidelines

#### Who do I talk to? ####

* Repo owner or admin

#### Dev wish list ####
> A wish is a dish that's a lot like a fish: it's a lot harder to throw back once it's been eaten." 
~Mr. Rakshasas.

**Here is a brief explanation of the features wanted for future prod versions:**

1. Demo key
	* Create a key that's required for anyone to try to connect to the DemoTunneler domain.
2. Alt sub listing
	* Allow the user to enter a predetermined list of custom subdomains. DemoTunneler will attempt to tunnel through these subs if the preferred sub fails.
3. Sub squatting
	* To ensure that your custom sub is still available the next time you want it, have a function that comes with DemoDriller to squat on that domain 100% of the time.
4. Derandomizing alternate custom subs
	* When a custom sub is unavailable, DemoTunneler tries it again in case it was a timeing issue and has since been freed up. However, if not, it will provide a randomized custom subdomain through localtunnel.me. Instead of providing a randomized custom sub, it would be better if it merely took a variation of the original domain (maybe adding an '\_1' or an '\_2' at the end or something depending on the number of variations on the original it attempts) and attempts to tunnel through that name. If that fails, it will move on and continue trying variations a pre-determined number of times.
5. URL shortening
	* The idea here is to allow a shortened url to be assigned to whatever custom sub comes out of DrillTunneler. If it's the same shortened URL every single time, that shortened url can always be used as a webhook destination regardless of whether the first-choice custom sub is available or not. Example:
		* Let's say JIRA is set to fire a webhook to `bit.ly/12345`. DemoTunneler attempts to tunnel through preprodenexsolutions123 but this custom subdomain name is unavailable for whatever the reason. DemoTunneler by default will attempt the domain again, but if it's still unavailable it will provide a randomized subdomain to `localtunnel.me`. Instead of having to reconfigure the webhook in JIRA every time this happens, DemoTunneler can use the bitly api to set `bit.ly/12345` to instead point to this new random subdomain. Therefore, the webhook fired to `bit.ly/12345` will still POST to whatever custom sub domain DemoTunneler is tunneling through.
	