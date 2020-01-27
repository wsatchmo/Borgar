var express = require('express'); //express dependency
var PORT = process.env.PORT || 80; //define port
var app = express(); //initialize express application

//For CSS
app.use(express.static("public"));

//Parse application body JSON
app.use(express.urlencoded({extended: true})); //ALLOWS NESTED OBJECTS -- is this needed?
app.use(express.json()); //Recognize the JSON

var exphbs = require("express-handlebars"); //Pull in express handlebars dependency

app.engine("handlebars", exphbs({ defaultLayout: "main"})); // Register handlebars view engine
app.set("view engine", "handlebars"); //Use the view engine

//Import Routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes); //Recognize & use the routes

//GENTLEMEN, START YOUR SERVERS!!!
app.listen(PORT, function(){
    //Logged when server is started:
    console.log("Server listening on:: http://localhost:" + PORT);
});