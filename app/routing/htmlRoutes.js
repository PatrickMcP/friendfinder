var path = require("path");

module.exports = function(app) {
    //Route to landing/index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //Route to survey/survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
};