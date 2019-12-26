const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// grabs the api from the bookController.js. Matches all books
// Ex: "/api/books"
router.route("/")
 .get(booksController.findAll)
 .post(booksController.create)

//  Matches the book id
// Ex: /api/books/:id
 router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)

    module.exports = router;