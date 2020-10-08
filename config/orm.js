// Import sql connection
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        
        connection.query(queryString, [table, cols, vals] , function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

     updateOne: function(table, val, cb) {
         let queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        
         connection.query(queryString, [table, val],function(err, result) {
             if (err) {
                throw err;
             }
             cb(result);
         });
     }
 };

 //Export the orm object for the model (burger.js).
 module.exports = orm;