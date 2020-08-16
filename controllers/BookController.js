const db = require("../models")
const axios = require("axios")

module.exports = {

    findAll(req, res) {
        db.Book.find()
            .then(books => res.json(data))
            .catch(err => console.log(err))
    },

    findOne(req, res) {
        db.Book.findById({_id: req.params.id})
            .then(book => res.json(book))
            .catch(err => console.log(err))
    },

    create(req, res) {
        db.Book.create(req.body)
            .then(data => res.json(data))
            .catch(err => console.log(err))
    },

    remove(req, res) {
        db.Book.findById({_id: req.params.id})
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => console.log(err))
    },

    googleSearch(req, res) {
        var title = req.params.title;
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
        .then(books => {
            res.json(books.data.items)
        })
    }
}