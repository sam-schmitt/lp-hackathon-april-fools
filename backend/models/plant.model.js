// import the mongoose library
const mongoose = require("mongoose");

// define a new mongoose schema for the Plant model
const PlantSchema = new mongoose.Schema({
	// define the title property as a String type
	title: {
		type: String,
	},
	// define the description property as a String type
	description: {
		type: String,
	},
	// define the lastWatered property as a Date type
	lastWatered: {
		type: Date,
	},
});

// export a new mongoose model based on the PlantSchema, with the collection name "plants"
module.exports = mongoose.model("plant", PlantSchema);
