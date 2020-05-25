const db = require("../db/db.json");
const fs = require("fs");

var i = 0;

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
      });

      app.post("/api/notes", function(req, res) {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));
        let newNote = req.body;
        newNote.id = i + 1;
        savedNotes.push(newNote);
        i++;
    
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        res.json(savedNotes);
    })

    app.delete("/api/notes/:id", function(req, res) {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));
        let deleteId = parseInt(req.params.id);
        let filterId = savedNotes.filter(deletenote => deletenote.id !== deleteId);
        let stringifiedNotes = JSON.stringify(filterId);

        fs.writeFileSync("./db/db.json", stringifiedNotes,(err,data) => {
            if (err) throw err;
        })
        res.json(savedNotes);
    });

};

    
    


