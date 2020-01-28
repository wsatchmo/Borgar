var connection = require('../config/connection.js'); //Connections dependency

function printQuestionMarks(num){ // Array of question marks -- to be used as sequelize variables 
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push('?');
    };
    return arr.toString();
};

//Convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    //loop through and push the key/values as a string to arr
    for (var key in ob){ 
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){ //check to skip hidden properties
            if (typeof value === "string" && value.indexOf(" " >= 0)){
                value = "'" + value + "'"
            }
            arr.push(key + "=" + value); //push to the array
        }
    }
    //Parses to a single comma separated string
    return arr.toString();
}

//Object for SQL statements

var orm = {
    all: function(tableInput, cb){  //ALL - 
        var queryString = "SELECT * FROM " + tableInput;

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    create: function(table, cols, vals, cb){ // CREATE -
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, condition, cb){
	var queryString = "UPDATE " + table;
	queryString += " SET devoured = true WHERE ";
	queryString += condition;

	console.log(queryString);
	connection.query(queryString, function(err, result){
		if(err){
			throw err;
		}
		cb(result);
	});
 },
};

module.exports = orm;