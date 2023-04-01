// import the Express.js framework and the plantModel schema defined in ../models/plant.model.js
const express = require("express");
const plantModel = require("../models/plant.model");

// create a new router instance using the express.Router() method
const router = express.Router();

// define a route to handle HTTP POST requests to create a new plant resource
router.post("/", async (req, res) => {
	// extract the title and description properties from the request body
	const { title, description } = req.body;
	try {
		// create a new plant document using the plantModel schema and the extracted properties, as well as the current date and time
		const plant = new plantModel({
			title,
			description,
			lastWatered: new Date(),
		});
		// save the new plant document to the database
		await plant.save();
		// send a JSON response with the new plant document as the body
		res.json(plant);
	} catch (err) {
		// if an error occurs, send a JSON response with an error message as the body
		res.json("err");
	}
});

// define a route to handle HTTP GET requests to retrieve a list of all plant resources
router.get("/", async (req, res) => {
	try {
		// retrieve a list of all plant documents from the database
		const plants = await plantModel.find();
		// send a JSON response with the list of plant documents as the body
		res.json(plants);
	} catch (err) {
		// if an error occurs, send a JSON response with an error message as the body
		res.json("err");
	}
});

// define a route to handle HTTP PUT requests to update a specific plant resource
router.put("/:plantId", async (req, res) => {
	// extract the plantId parameter from the request URL
	const { plantId } = req.params;
	try {
		// retrieve the plant document with the specified plantId from the database
		const plant = await plantModel.findById(plantId);
		// set the lastWatered property of the plant document to the current date and time
		plant.lastWatered = new Date();
		console.log(plant.lastWatered);
		// save the updated plant document to the database
		await plant.save();
		// send a JSON response with the updated plant document as the body
		res.json(plant);
	} catch (err) {
		// if an error occurs, log the error message to the console and send a JSON response with an error message as the body
		console.log(err);
		res.json("err");
	}
});

// define a route to handle HTTP GET requests to retrieve a specific plant resource
router.get("/:plantId", async (req, res) => {
	// extract the plantId parameter from the request URL
	const { plantId } = req.params;
	try {
		// retrieve the plant document with the specified plantId from the database
		const plant = await plantModel.findById(plantId);
		// send a JSON response with the plant document as the body
		res.json(plant);
	} catch (err) {
		// if an error occurs, send a JSON response with an error message as the body
		res.json("err");
	}
});

// export the router instance so that it can be used in other parts of the application
module.exports = router;
