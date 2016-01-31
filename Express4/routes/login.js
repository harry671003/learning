// Login route

var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
	res.send("Login Route");
});

module.exports = {
	"router": router
}