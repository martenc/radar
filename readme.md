# Technology Radar w/MongoDB Backend

[ ![Codeship Status for martenc/radar](https://codeship.com/projects/778f1fb0-9df0-0132-b04e-0a6e67eb63d6/status?branch=master)](https://codeship.com/projects/64661)

A simple technology radar map (made famous by [Thoughtworks](http://www.thoughtworks.com/radar)). Started from Urre's repo, but I added a backend to it. Originally created by Urban Sanden prior to 1.3.0

# Database Configuration

Create your own "database.js" file and mongodb. The contents of which will look like the below. You'll also need to create your own config/environmental vars (e.g. in Hebroku ours is named "process.env.adminpassword").

```
module.exports = {
	'dbconn' : 'mongodb://<dbuser>:<dbpassword>012345.mongolab.com:012345/your-tech-radar'
};
```



### Changelog

#### 1.3.0 (Marten's new stuff)
+ Added monogodb to store blips data
+ Added admin to manage blip data

------------------------------------------------------

#### 1.2.0
+ New color scheme, new default background svg image
+ Use user website instead of Twitter profile url

#### 1.1.0
+ Added possiblity to add custom header image
+ Added layout switcher and list style for smaller screens
+ Blip hovering from the lists

#### 1.0.0
+ First version published

### License
Copyright (c) 2014 Urban Sanden. Licensed under the MIT license.
