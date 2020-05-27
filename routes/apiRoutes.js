let db = require("../db/db.json");
const fs = require("fs");

var i = 0;


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json",'utf8', function(err,data) {
            if(err) { throw err;
            } else { 
            let notesArr = JSON.parse(data);
            res.json(notesArr);
            }
        })
        
      });

      app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        newNote.id = db.length;
        db.push(newNote);
    
        fs.writeFile("./db/db.json", JSON.stringify(db), err => {
            if(err) throw err;
            res.json(true);
        });
        
    })

    app.delete("/api/notes/:id", function(req, res) {
        let deleteId = parseInt(req.params.id);  
        console.log(deleteId)
        db = db.filter(deletenote => deletenote.id !== deleteId);
        // console.log(filteredNotes);
        


        fs.writeFile("./db/db.json", JSON.stringify(db), err => {
            if (err) throw err;
            res.json(true);
        });
        
    })

};

    
    


