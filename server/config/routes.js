var anonymous = require('../controllers/anonymous.js');
var path = require('path');

module.exports = function(app) {

    app.post('/notes', function(req, res) {
        console.log("routes postNotes ", req.body);
        anonymous.postNotes(req, res);
    })

    app.get('/notes', function(req, res) {
        anonymous.getNotes(req, res);
    })

    // Express Test
    app.get('/express', function(req, res) {
        anonymous.root(req, res);
    })

    // Root Request
    app.get('/', function(req, res) {
        console.log(`root / from node`);
        anonymous.root(req, res);
        // res.sendFile(path.resolve("./mongoose.js"))
    })

    app.all("*", (req,res,next) => {
        console.log(`app.all / from node`);
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}