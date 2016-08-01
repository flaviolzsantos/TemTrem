var request = require("request");
var express = require("express");
var app = express();

var schedule = require('node-schedule');
 
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 6)];
rule.hour = 8;
rule.minute = 30;

var h = schedule.scheduleJob(rule, function(){
	temtrem();
});

var rule2 = new schedule.RecurrenceRule();
rule2.dayOfWeek = [new schedule.Range(1, 6)];
rule2.hour = 17;
rule2.minute = 30;

var h2 = schedule.scheduleJob(rule2, function(){
        temtrem();
});


app.get("/trem",function(req, res){
	temtrem(res);
	});

//app.listen(3000);

function enviaEmail(){

var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
	        service: 'Gmail',
		     auth: {
			     user: "notificacaonodejs@gmail.com",
			     pass: "123nodejs"
			   } });

console.log('SMTP Configured');

// Message object
var message = {

	    // sender info
	    from: 'Sender Name <flaviolzsantos@gmail.com>',

	    // Comma separated list of recipients
	    to: '"Receiver Name" <flaviolzsantos@gmail.com>',

	    // Subject of the messa
	    subject: 'Não tem trem', 

	     // plaintext bod
	     text: 'Não tem trem!',

	     // HTML body
	    html:'<p><b>Nao tem trem</b>'};

console.log('Sending Mail');
transport.sendMail(message, function(error){
	  if(error){
		console.log('Error occured');
		console.log(error.message);
		return;
	};
	 console.log('Message sent successfully!');
	  //transport.close(); // close the connection pool
});
}

function temtrem(res){
request({
	method:"GET",
	url:"http://www.cptm.sp.gov.br/Pages/Home.aspx"
	},
	function(error, response, body){
		
		//var result = body.split("TURQUESA");
		//if(result[1].substring(7,150).indexOf("Normal") < 0)
			enviaEmail();
			//console.log("enviou");
		
		});
};
