var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});
app.get("/results", function(req, res){
    var searchTerm = req.query.searchTerm;
    var url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            //res.send(body);
            //res.send(data["Search"][0]);
           // res.send(data["Search"][0]["Title"]);
           res.render("results", {data, data});
            
        }
    });
});
app.listen(3000, "localhost", function(){
    console.log("Movie App has started!");
});