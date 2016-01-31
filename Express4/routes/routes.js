var login = require("./login");
var api = require("./api");
var routes = "Routes";

module.exports = {
	"loginRoutes": login.router,
	"apiRoutes": api.router
};