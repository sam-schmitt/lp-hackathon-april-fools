const express = require("express");
const plantModel = require("../models/plant.model");
const router = express.Router();

router.post("/", async (req, res) => {
	const { title, description } = req.body;
	try {
		const plant = new plantModel({
			title,
			description,
			lastWatered: new Date(),
		});
		await plant.save();
		res.json(plant);
	} catch (err) {
		res.json("err");
	}
});

router.get("/", async (req, res) => {
	try {
		const plants = await plantModel.find();
		res.json(plants);
	} catch (err) {
		res.json("err");
	}
});

router.put("/:plantId", async (req, res) => {
	const { plantId } = req.params;
	try {
		const plant = await plantModel.findById(plantId);
		plant.lastWatered = new Date();
		console.log(plant.lastWatered);
		await plant.save();
		res.json(plant);
	} catch (err) {
		console.log(err);
		res.json("err");
	}
});

router.get("/:plantId", async (req, res) => {
	const { plantId } = req.params;
	try {
		const plant = await plantModel.findById(plantId);
		res.json(plant);
	} catch (err) {
		res.json("err");
	}
});

module.exports = router;
