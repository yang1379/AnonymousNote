var mongoose = require('mongoose');

// Retrieve the Schema called 'Note' and store it to the variable Note
var Note = mongoose.model('Note');

module.exports = {

    postNotes: function(req, res) {
        console.log(`controllers postNotes ${req.body.text}`);
        var note = new Note({text: req.body.text});
        
            // Try to save that new turtle to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
            note.save(function(err) {
                // if there is an error console.log that something went wrong!
                if(err) {
                    console.log('add note failed');
                    console.log(err);
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a note');
                    return res.json("added note");
                }
            })
        
    },

    getNotes: function(req, res) {
        Note.find({}, function(err, notes) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
            } else { // else console.log that notes were retrieved
                console.log('successfully retrieved all notes');
                console.log(notes);
                return res.json(notes);
            }
        })

        // res.json("Notes from Express/Node");
        // Note.find(

        // );
        
    },

    // postNotes: function(req, res) {
    //     let taskInstance = new Note(req.body);
    //     taskInstance.save(function(err) {
    //         if (err) {
    //             return res.json(false);    
    //         }
    //         else {
    //             Note.find({}, function(err, notes) {
    //                 return res.json(notes);
    //             })
                
    //             return res.json(notes);
    //         }
            
    //     })
    // },

    root: function(req, res) {
        res.json("Express Root");
    }

}