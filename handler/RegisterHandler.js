"use strict"
//var User = require('./model/User');

module.exports = class RegisterHandler {

	async postRegister(User, db){
			var response;
			if (db) {
		    db.collection('users').save(function(err, User ){
		     console.log("User Added: " + JSON.stringify(User));
		    });
		  } else {
		    response = { message:
						{ error: "DB Connection is unavailable!"}
					};
				return response;
		  }


			response = {
				message:{
					result: 'success'
				}
			}
			return response;
		}
	}
