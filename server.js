var express = require("express");
var fs = require("fs");
var sql = require("sql.js");
var bodyParser = require("body-parser");

// Set up Express
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var DB_FILENAME = "Bootcamp.sqlite";
var db = new sql.Database(fs.readFileSync(DB_FILENAME));

app.get("/", function(req, res) {
	res.sendfile('Index.htm');
});

app.get("/bestil", function(req, res) {
    var hat = db.prepare("SELECT * FROM ophold ORDER BY ID");
    var ophold = [];
    while (hat.step()){
        ophold.push(hat.getAsObject());
    };
    res.render("Bestil", {"ophold": ophold});
});

app.get("/info", function(req, res) {
    res.sendfile("info.htm");
});

// Start server
var server = app.listen(4040, function () {
   var port = server.address().port;
   console.log("Motherfuckin server open at http://localhost:%s", port);
});