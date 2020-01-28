var mysql = require("mysql"); // connection to mysql info
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root", //Change to your own
    database: "borgars_db"
});

//make connection
connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId); 
});

module.exports = connection;
//exporting to ORM