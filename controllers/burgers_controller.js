var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get('/', function(req, res){
    res.redirect('/burgers') //Redirect to home page
});

router.get('/burgers', function(req,res){
    burgers.all(function(data){ //Display all burgers on home page
        var burgObj = {burgers: data};
        console.log(burgObj);
        res.render('index', burgObj);
    });
});

//Updating burger database when devoured
//WHY IS IT NOT GETTING HERE
router.put("/burgers/update/:id", function(req,res){
	var condition = "id=" + req.params.id;
	console.log("condition", condition);

	burgers.updateOne({
		devoured: req.body.devoured
	}, condition, function(data){
		res.redirect("/burgers")
	});
});

//Adding a new burger
router.post("/burgers/create", function(req, res){
    burgers.create(["burger_name"], [req.body.burg_name], function(data){
        res.redirect("/burgers")
    });
});

module.exports = router;