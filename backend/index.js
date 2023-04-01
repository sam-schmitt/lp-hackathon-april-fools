const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

const plantRoutes = require("./routes/plant.route.js");
const connect = require("./util/mongodb");

connect();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
	res.json("Server WORKS!");
});

app.use("/plant", plantRoutes);

app.listen(PORT, (req, res) => {
	console.log("Server is running at http://localhost:" + PORT);
});

// express
// cors
// mongoose
// body-parser
//
