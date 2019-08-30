// Dependencies
// =============================================================

// Require the sequelize library
// var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
// var sequelize = require("../config/connection.js");
// Create a "Book" model with the following configuration

module.exports = function(sequelize, DataTypes){
    var Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        pages: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });
    return Book;
};  