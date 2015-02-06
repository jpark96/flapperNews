 //Imports Meetup instance
 var Post = require('../models/posts.js');

 //exported Methods
 module.exports.create = function (req, res) {
 	var post = new Post(req.body);
 	post.save(function (err, result) {
 		res.json(result);
 	});
 }

 module.exports.list = function (req, res) {
 	Post.find({}, function (err, results) {
 		res.json(results);
 	});
 }