const mongoose = require("mongoose");

function connect() {
	const dbUri = "mongodb://localhost:27017/plant-tracker";
	return mongoose
		.connect(dbUri)
		.then(() => {
			console.log("Connected to DB");
		})
		.catch((error) => {
			console.log("Could not connect to DB");
			process.exit(1);
		});
}

module.exports = connect;
