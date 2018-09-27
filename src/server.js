var express = require("express");
var app = express();
var routes = require("./routes.js")(app);

var server = app.listen(3000);
console.log("Listening on port %s...", server.address().port);