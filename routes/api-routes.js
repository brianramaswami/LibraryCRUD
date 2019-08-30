// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// var test = require("../models/book");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;


// Routes
// =============================================================
module.exports = function (app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function (req, res) {
    db.Book.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function (req, res) {
    if (req.params.book) {
      const bookTitle = req.params.book;     
      db.Book.findAll({
        where: {
          title: bookTitle,
        }
      }).then(function (results) {
        res.json(results);
      })
    }
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function (req, res) {
    if (req.params.genre) {
      const bookGenre = req.params.genre;     
      db.Book.findAll({
        where: {
          Genre: bookGenre,
        }
      }).then(function (results) {
        res.json(results);
      })
    }
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function (req, res) {
    if (req.params.author) {
      const bookAuthor = req.params.author;     
      db.Book.findAll({
        where: {
          author: bookAuthor,
        }
      }).then(function (results) {
        res.json(results);
      })
    }
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function (req, res) {
    db.Book.findAll({
      where: {
        pages: {
          [Op.gt]: 150
        }
      }
    }).then(function (results) {
      res.json(results);
    })
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function (req, res) {
    db.Book.findAll({
      where: {
        pages: {
          [Op.lte]: 150
        }
      }
    }).then(function (results) {
      res.json(results);
    })
  });

  // Add sequelize code to create a book
  app.post("/api/new", function (req, res) {
    console.log("book data: ");
    data = req.body;
    console.log(data);

    // Book.create({ 
    //   title:  data.title,
    //   author:  data.author,
    //   genre: data.genre,
    //   pages: data.pages
    // });

    db.Book.create(data);
    res.send("added to database");
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function (req, res) {
    console.log("req: ");
    obj = req.body;
    console.log(obj);
    db.Book.destroy({
      where: obj
    });
  });
};