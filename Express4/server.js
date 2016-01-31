var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var routes = require("./routes/routes");


// Configure the routes
app.use('/login', routes.loginRoutes);
app.use('/api', routes.apiRoutes);


// Start the server
app.listen(port);
console.log("The magic happens on port: " + port)