var orm = require("../config/orm.js"); // Require the ORM to interact with Database

var burgers = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    }, //create columns for new burgers
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    }, //update columns and conditions for burgers
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};
//export for the controller
module.exports = burgers;