"use strict"
var User = require('../model/User');

module.exports = class RegisterHandler {

	  handleRequest(reqType, db, req, res) {
	  try{
	      var handler;
	      var response;
	      switch (reqType) {
	        case 'REGISTER':
	        console.log ("user: I am here 111");
	          var user = new User ({email: req.body.email,
	                  firstName: req.body.firstName,
	                  lastName: req.body.lastName,
	                  passwordHash: req.body.passowrd,
	                  passwordSalt: ''});
	          console.log ("user: " + JSON.stringify(user));

	          response = this.postRegister(user, db);
	          break;
	        default:
	  				throw new Error('Unknown request type specified!');
	      }
	    } catch (err) {
	      console.log(err);
	  }
	  return res.status(200).json(response);
	}


	postRegister(user, db){
			var response;
			if (db) {
				console.log("Before saving the Users");
				var userData = new User({ firstName: user.firstName, lastName: user.lastName, email: user.email})
		    var result = userData.save(function(err){
					if (err) {
						response = { message:
								{ error: "Error while saving the user!"}
							};
						return response;
					}
		     console.log("User Added: ");
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
