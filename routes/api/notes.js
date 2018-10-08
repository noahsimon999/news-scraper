// imports express router and note controller
var router = require("express").Router();
var noteController = require("../../controllers/note");


// establishes routes for notes
router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

// exports router
module.exports = router;
