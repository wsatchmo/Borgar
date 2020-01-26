mysql = require("mysql"); // connection to mysql info
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", //REMEMBER TO TAKE THIS OUT
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