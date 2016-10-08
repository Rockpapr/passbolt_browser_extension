	      ____                  __          ____
	     / __ \____  _____ ____/ /_  ____  / / /_
	    / /_/ / __ `/ ___/ ___/ __ \/ __ \/ / __/
	   / ____/ /_/ (__  |__  ) /_/ / /_/ / / /_
	  /_/    \__,_/____/____/_.___/\____/_/\__/
	
	Open source password manager for teams
	(c) 2016 Bolt Softwares Pvt Ltd


Licence
==============

Passbolt firefox plugin is distributed under [Affero General Public License v3](http://www.gnu.org/licenses/agpl-3.0.html)


Prerequisite
===============================

You will need:
1. Nodejs
2. JPM the Node base Firefox Addon SDK (jetpack)

```
	git clone git@bitbucket.org:passbolt/passbolt_ff.git
	sudo npm install jpm -g
```

See https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation


Development
===============================

Launch an instance of Firefox with your add-on installed.
Make sure you run an instance that allowed unsigned extension (the developer edition for example)
```
	jpm run -b /Applications/FirefoxDeveloperEdition.app
```
Runs the add-on's unit tests.
```
	jpm test
```
Package your add-on as an XPI file, which is the install file format for Firefox add-ons.
The default grunt job will create two XPI, one with a debug mode set and another one to be used in production.
```
	grunt
```
This is just an elaborated version of the following:
```
	jpm xpi
```

Push a new version
------------------

To push a new version of the plugin, and before submitting it to mozilla, 
it is important to tag it :

  git commit -am 'X.X.X'
  git tag -a X.X.X -m 'X.X.X'
  git push origin X.X.X
  git push origin develop

Productivity
------------

While developing you'll frequently need to update your firefox plugin to test
it. Install the firefox "Extension Auto-Installer" which makes the testing process
lighter if you want to reuse an existing firefox instance and profile.


https://addons.mozilla.org/en-us/firefox/addon/autoinstaller/

By default it is disabled, go on the configuration page and activate it.

To compile the plugin in both non-debug and debug version, use the following command :

grunt build-xpi

It will create the debug and non debug versions, as well as a symbolic link passbolt-latest@passbolt.com.xpi pointing to the non debug version.

To udpate your plugin in firefox after a change, go on your projet root and execute
the following:

jpm xpi ; wget --post-file=passbolt.xpi http://localhost:8888/

or

grunt push-xpi (which will install the latest debug version)


How to edit the LESS/CSS files?
===============================

Install grunt and grunt
```
	npm install -g grunt-cli
```
Install the needed modules defined in the grunt config
```
	npm install
```
Install the styleguide
```
	bower install
	grunt styleguide-deploy
```
Make sure Grunt watch for less changes and compile them into CSS
```
	grunt watch
```
Edit one LESS file to see if it works!
Make sure that if you need to make change the styleguide to request changes upstream.

How to install / update openpgp
===============================
By default, openpgpjs as provided in the official repository cannot work 
in the add-on environment. So we have developed some scripts to patch it.

To install or update openpgp:
```
	grunt lib-openpgp-deploy
```

The command will take care of downloading the version defined in package.json,
patch it, and deploy it in /lib/vendors.
Look at Gruntfile.js to see in details what it does.

Credits
=======

https://www.passbolt.com/credits