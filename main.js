var request = require("request");
var express = require("express");
//var email = require("nodemailer");
var app = express();
//var transporter = email.createTransport('smtps://flaviolzsantos%40gmail.com:pass@smtp.gmail.com');


app.get("/trem",function(req, res){
	temtrem(res);
	});

app.listen(3000);

/*function enviaEmail(){
	var mailOptions = {
		    from: '"aviso" <@blurdybloop.com>', // sender address
		        to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
			    subject: 'Hello ✔', // Subject line
			        text: 'Hello world 🐴', // plaintext body
				    html: '<b>Hello world 🐴</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		    if(error){
			            return console.log(error);
				        }
					    console.log('Message sent: ' + info.response);
	});
	}*/

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
