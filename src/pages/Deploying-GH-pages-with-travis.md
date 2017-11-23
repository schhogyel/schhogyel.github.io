---
title: "Deploying with Travis"
date: "2017-11-24"
---

Travis CI can deploy your static files to GitHub Pages after a successful build.

You will need to provide a personal access token and set the deployment provider
details in .travis.yml.

For a minimal configuration, add the following to your .travis.yml:

```javascript
var test = 2;
var string = "test";
```
