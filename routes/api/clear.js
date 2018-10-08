// imports express router and clear controller
var router = require("express").Router();
var clearController = require("../../controllers/clear");

// establishes route "/" and calls the clearDB function
router.get("/", clearController.clearDB);

// exports router. 
module.exports = router;
