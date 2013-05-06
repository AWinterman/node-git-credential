# git-credential #

A module for accessing
[git-credentials](https://www.kernel.org/pub/software/scm/git/docs/gitcredentials.html) from a node process. Note that this requires a version of git >= 1.7.12


## Usage:

```javascript
var credential = require("git-credential")

credential(function(err, data){
  if (err) return console.log(err)
  // if you run this it'll print your username and pass to the command line.
  // you might not want that
  console.log(data)
})
```
