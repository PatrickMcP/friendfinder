//NPM require
var express = require('express');
//car to store express call
var app = express();
//Declaring a port for express to listen on
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});