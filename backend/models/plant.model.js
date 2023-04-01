const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	lastWatered: {
		type: Date,
	},
});

module.exports = mongoose.model("plant", PlantSchema);
