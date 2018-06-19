const mongoose = require("mongoose");
const request = require("request");
const cheerio = require("cheerio");
const db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytscraper";
var url = "new york times url";

module.exports = function (app) {

	app.get("/api/articles", function (req, res) {
		console.log("get articles working");
		res.json("articles sent");
	});

	app.post("/api/articles", function (req, res) {

	});

	app.delete("/api/articles", function (req, res) {

	});



}