var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
//   });
  
// app.get("/api/notes", function(req, res) {
//     fs.readFile("./db/db.json", (err,data) => {
//     res.json(JSON.parse(data))
//   });
// });

  // app.post("/api/tables", function(req, res){
  //     var newNote = req.body;
  //     console.log(newNote);
  // });

  app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})