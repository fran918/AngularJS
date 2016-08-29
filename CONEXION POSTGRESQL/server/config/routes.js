

module.exports = function(app,connection)
{
	var connection = require('./connection.js'); 

	app.get('/',function(req,res){
		console.log('#rootDirectory');
		res.sendFile('index.html',{root : __dirname + '../../client/app'});
	});
	

}//end exports 