
// // var express = require("express");  
// config = require("express"); 
// // PORT 
// var exphbs = require("express-handlebars");

// var app = express();
// var PORT = process.env.PORT || 3306; 


// // Static content for app
// app.use(express.static("public"));

// //Body parsing
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// // Handlebars
// var exphbs = require("express-handlebars");
// // Engine to call handlebars
// app.engine("handlebars", exphbs({defaultLayout:"main"}));
// app.set("view engine", "handlebars");

// // Access for server to routes 
// var routing = require("./controllers/burgers_controllers");
// app.use(routing);

// app.listen(PORT, function(){
//     console.log("server listening: http://localhost:" + PORT);
// }); 


var express = require("express");

var PORT = process.env.PORT || 3306;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});