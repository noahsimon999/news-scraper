
// imports express router and headline controller
var router = require("express").Router();
var headlineController = require("../../controllers/headline");


// establishes routes for a get, delete, and put
router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

// exports router for use
module.exports = router;
