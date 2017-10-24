'use strict';

const router = require('express').Router();

const CONTEXT = {
	REGISTRATION: 'registration',
	FORGOT_PASSWORD: 'forgotPassword',
};



router.post('/create', function (req, res) {
	 console.log("inside regiser create");
});
module.exports = router;
