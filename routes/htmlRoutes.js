var db = require("../models");
const Op = db.Sequelize.Op

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Times.findAll({}).then(function(dbTimes) {
      res.render("index", {
        times: dbTimes
      });
    });
  });

  // Load example page and pass in an example by email
  app.get("/user/reservation/:email", function(req, res) {
    db.User.findOne({ where: { email: req.params.email } }).then(function(
      dbUser
    ) {
      console.log(dbUser)
      res.render("reservation", {
        user: dbUser
      });
    });
  });
  // Load example page and pass in an example by email
  app.get("/user/timeslot/:TimeID", function(req, res) {
    db.User.findAll({ where: { TimeID: req.params.TimeID } }).then(function(
      dbUser
    ) {
      console.log(dbUser)
      res.render("timeslot", {
        user: dbUser
      });
    });
  });
  app.get("/times/:beginDate", function(req, res) {
    db.Times.findAll({ where: { 
      beginDate: req.params.beginDate, 
      availableSpaces: {
        [Op.gt]:0
        }
   } }).then(function(
      dbTimes
    ) {
      res.render("submission", {
        times: dbTimes
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
