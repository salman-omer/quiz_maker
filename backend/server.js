const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const data = require("./routes/api/data");

const API_PORT = 3001;
const app = express();
const router = express.Router();



// ????????
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// this is our MongoDB database
const dbRoute = "mongodb+srv://minerva:minerva@minerva-c20xu.mongodb.net/minerva";
//mongo "mongodb+srv://minerva-c20xu.mongodb.net/test" --username minerva

// connects our back end code with the database
mongoose
  .connect(dbRoute,{ useNewUrlParser: true })
  .then( () => console.log('Mongodb Connection Established.'))
  .catch(err => console.log(err));
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes 
app.use('/api/items/',items);

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));