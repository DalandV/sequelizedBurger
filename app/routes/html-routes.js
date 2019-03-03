const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      const hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
  });
};
