var express = require("express");
var app = express();
var mysql = require("mysql");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var request = require("request");
var cheerio = require("cheerio");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_colors"
});

connection.connect((err) => {
	if (err) throw err;
	console.log("Connected Mysql!");
});

/*app.get("/", function(req, res) {
	request("https://www.canva.com/colors/", function(error, response, body) {
		if (error) throw error;
		$ = cheerio.load(body);*/
		//var ds = $(body).find(".color").children("strong");
		/*var ds = $(body).find(".color");
		ds.each(function(i, e) {
			if (i>0) {*/
			//console.log(/*$(this).children("strong").text(), "	",*/$(this).siblings(".color-hex").text());						
			//console.log($(this).text();
			//console.log(e["attribs"]["src"]);			
			//console.log(e);

				/*var sql = "INSERT INTO colors (color_name, color_hex) VALUES ('"+$(this).children("strong").text()+"','"+$(this).siblings(".color-hex").text()+"')";
				connection.query(sql, (err, results)=> {
					if (err) throw err;
					console.log("Success!");
				});
			}
		});
		console.log(ds.length);
		res.render("trangchu", {html:$(body)});
	});	
});
*/
app.get("/data", (req, res) => {
	var sql = "SELECT * FROM colors";
	connection.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
	});
});

app.listen(3000, function() {
	console.log("Server is listening");
});