// just the simplest smoke test
var get_credential = require("./index")

get_credential(function(err, data){
  if (err) return console.log("uh oh! \n" + err)
  if (data.username && data.password) console.log("success")
})
