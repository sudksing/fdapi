'use strict';
const jsonWebToken = require('jsonwebtoken');

module.exports = class JWTUtils{

  getClaimSet(uid, expireTime){
  return {
      iss: 'feedbackdo',
      sub: 'feedbackdo_JWT',
      aud: 'feedbackdo.com',
      exp: 3600,
      uid: uid
      };
  }

  create(claimSet) {
		const key = 'asdfglkjhgfafafaferercvreroviodfioxpsdofifservcvdfereoicvjxvjofisodfwworexvxcvsfsdferefafdfefe';
		console.log('JWTUtils.create - start');
		try{

			// if ((!_.isObject(claimSet)) || _.isEmpty(claimSet)) {
			// 	throw new Error('Payload is empty');
			// }
			// const options = {
			// 	algorithm: 'RS256'
			// };

			//return jsonWebToken.sign(claimSet, key, options);
      return jsonWebToken.sign(claimSet, key);

		}catch (err) {
      console.log(err);
			throw new Error('FAILED to create Token.', err);
		}finally{
			console.log('JWTUtils.create - end');
		}
	}

}
