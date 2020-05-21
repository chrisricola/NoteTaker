var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 7000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });
  
app.get("/api/notes", function(req, res) {
    false.readfile("./db/db.json", (err,data) =>)
    res.json(JSON.parse(data))
  });

  app.post("/api/tables", function(req, res){

  });

  app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})