var request = require("request");
request({
	method:"GET",
	url:"http://www.cptm.sp.gov.br/Pages/Home.aspx"
	},
	function(error, response, body){
		
		var result = body.split("TURQUESA");
		console.log(result[1].substring(7,150).indexOf("Normal") > 0);
		});
