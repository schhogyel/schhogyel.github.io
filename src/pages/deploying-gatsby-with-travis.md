---
title: "Deploying Gatsby on Github Pages with Travis"
date: "2017-11-23"
---

I wanted to automatically deploy my static site that was built on Gatsby. Github
Pages is one of many options that allows us to easily host our static site.
Travis CI provides an easy solution to automatically deploy sites on Github
Pages.

This is how my _.travis.yml_ file looks like:

```yaml
language: node_js
node_js:
  - "8"
cache:
  yarn
before_script:
  - "yarn global add gatsby"
script:
  - "gatsby build"
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  local_dir: public
  target_branch: master
  on:
    branch: source
```
