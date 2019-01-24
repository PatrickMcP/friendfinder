//Import data of friends list
var friendData = require("../data/friends");

module.exports = function (app) {
    // Get request to API for friends lsit data
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    
    //post data to friends list
    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });

};