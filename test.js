// just the simplest smoke test
var get_credential = require("./index")

get_credential(function(err, data){
  if (err) console.log("uh oh! \n" + err)
  console.log(data)
})
