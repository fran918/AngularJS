var db = require('../config/connection.js');


exports.TEST = function(req, res)
{
	db.any("SELECT * from TEST WHERE TEST = 'TEST'")
	.then(function(data){
		return res.json({"Error": false, "Message": "Success", "Contacts":data});
	})
	.catch(function(error){
		res.json({"Error": true, "Message": "Error: " + error});
		console.log("There was an error getting contacts! Returned: " + error);
	})
	
};
