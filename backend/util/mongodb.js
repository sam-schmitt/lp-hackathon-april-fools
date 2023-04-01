// import the mongoose library
const mongoose = require("mongoose");

// define a function named 'connect' that returns a promise
function connect() {
	// specify the URI of the MongoDB database to connect to
	const dbUri = "mongodb://localhost:27017/plant-tracker";
	// use the mongoose library to connect to the MongoDB database specified in dbUri
	return mongoose
		.connect(dbUri)
		.then(() => {
			// if the connection is successful, log a message to the console
			console.log("Connected to DB");
		})
		.catch((error) => {
			// if the connection is not successful, log an error message to the console and exit the process with a failure status code
			console.log("Could not connect to DB");
			process.exit(1);
		});
}

// export the 'connect' function so that it can be used in other parts of the application
module.exports = connect;
