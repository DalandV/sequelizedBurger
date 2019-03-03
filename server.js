// Dependencies
const express = require("express");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Models
const db = require("./app/models");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

// Sync sequelize models and start Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
