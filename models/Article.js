const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},

	date: {
		type: String,
		trim: true
	},

	url: {
		type: String,
		trim: true
	}

});

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;