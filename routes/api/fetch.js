
// imports express router and fetch controller
var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

// establishes route that executes the scraper
router.get("/", fetchController.scrapeHeadlines);

// exports router
module.exports = router;
