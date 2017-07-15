var express = require("express");
var app = express();
var mysql = require("mysql");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "my_colors"
}); 

connection.connect((err) => {
	if (err) throw err;
	console.log("Connected Mysql");
});

app.get("/", (req, res) => {
	var sql = "SELECT * FROM colors";
	connection.query(sql, (err, results) => {		
		if (err) throw err;
		console.log(results);
		res.render("home", {"data":results});		
	});	
});

app.get("/:id", (req, res) => {
	res.render("detail");
});

app.listen(3000, () => {
	console.log("Server is listening");
});