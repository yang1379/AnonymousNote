// require mongoose
var mongoose = require('mongoose');

// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var NoteSchema = new mongoose.Schema({
    text:  { type: String, required: true, minlength: 3},
}, {timestamps: true });

// Store the Schema under the name 'Note'
mongoose.model('Note', NoteSchema);
