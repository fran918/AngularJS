var blueb = require ('bluebird');
var options = { promiseLib: blueb };
var pgp = require('pg-promise')(options);


var conn = {
	host:'/*IP*/',
	port: '5432',
	database: '/*DATABASE*/',
	user: '/*PASSWORD*/',
	password: '/*PASSWORD*/'
};




var db = pgp(conn);

module.exports = db;



