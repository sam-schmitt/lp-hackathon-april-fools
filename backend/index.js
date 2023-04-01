// import required modules
const express = require("express"); // import the Express.js framework
const cors = require("cors"); // import the CORS middleware
const bodyParser = require("body-parser"); // import the body-parser middleware

// create an instance of the Express.js framework
const app = express();

// specify the port that the server should listen to
const PORT = 4000;

// import the plantRoutes from the ./routes/plant.route.js file
const plantRoutes = require("./routes/plant.route.js");

// connect to the MongoDB database
const connect = require("./util/mongodb");
connect();

// allow cross-origin resource sharing using the CORS middleware
app.use(cors());

// parse JSON objects sent in the request and attach them to the request object using the body-parser middleware
app.use(bodyParser.json({ limit: "50mb", extended: true }));

// define a root route that returns a JSON object with a message
app.get("/", (req, res) => {
	res.json("Server WORKS!");
});

// define a route for handling requests related to plants, using the plantRoutes imported earlier
app.use("/plant", plantRoutes);

// start the server and listen to requests on the specified port
app.listen(PORT, (req, res) => {
	console.log("Server is running at http://localhost:" + PORT);
});
