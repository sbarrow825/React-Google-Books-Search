const router = require("express").Router();
const BooksController = require("../../controllers/BookController");

// matches with api/google/:title
router.route("/:title")
    .get(BooksController.googleSearch)

module.exports = router;