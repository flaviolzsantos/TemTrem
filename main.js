var request = require("request");
var express = require("express");
var app = express();

var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '00 50 11 * * 1-5',
  onTick: function() {
	temtrem();
	},
  start: false,
  timeZone: ''
});
job.start();


var job2 = new CronJob({
  cronTime: '00 30 20 * * 1-5',
  onTick: function() {
        temtrem();
        },
  start: false,
  timeZone: ''
});
job2.start();


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
