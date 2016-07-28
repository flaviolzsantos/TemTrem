var request = require("request");
var express = require("express");
var app = express();

app.get("/trem",function(req, res){
	temtrem(res);
	});

app.listen(3000);

function temtrem(res){
request({
	method:"GET",
	url:"http://www.cptm.sp.gov.br/Pages/Home.aspx"
	},
	function(error, response, body){
		
		var result = body.split("TURQUESA");
		res.json({tem : (result[1].substring(7,150).indexOf("Normal") > 0)});
		});
};
