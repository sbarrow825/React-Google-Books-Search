const router = require("express").Router();
const BooksController = require("../../controllers/BookController");
const { BookProvider } = require("../../client/src/utils/GlobalState");

router.route("/:title")
    .get(BooksController.googleSearch)

module.exports = router;