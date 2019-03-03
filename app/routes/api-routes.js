const db = require("../models");

module.exports = function(app) {
  app.post("/api/burger/add", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(dbBurger) {
      res.redirect("/");
    });
  });

  app.put("/api/burger/update/:id", function(req, res) {
    db.Burger.update(
      {
        devoured: 1
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbBurger) {
      res.json("/");
    });
  });
};
