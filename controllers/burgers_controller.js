var express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        let handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"],[req.body.burger_name], function(result) {
        res.json({id: result.insertId});
        console.log("created new burger");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

//Export routes for server.js to use
module.exports = router;