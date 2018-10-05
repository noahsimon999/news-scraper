
// require NPM packages
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");

//set port to be port designated in env file or use port 8080
var PORT = process.env.PORT || 8080;

// var to use express
var app = express();

// require routes
var routes = require("./routes");

//Parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({ extended: true }));
//use express in json
app.use(express.json());
// make a public static folder
app.use(express.static("public"));

// connect handlebars to our express app
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// have every request go through route middleware
app.use(routes);

// if deployed use the deployed database or use local database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// connect to the mongo db
mongoose.connect(MONGODB_URI);

// listen on port and console log confirmation 
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
