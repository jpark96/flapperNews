//Sets up the Posts instance
var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
	title: String,
	link: String,
	upvotes: Number
});