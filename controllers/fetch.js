
// imports models and scrape script
var db = require("../models");
var scrape = require("../scripts/scrape");


// scrape function that returns json
module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new products today. Check back tomorrow!"
          });
        }
        else {
          res.json({
            message: "Added " + dbHeadline.length + " new products!"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
