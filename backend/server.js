const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const QuizTemplate = require("./quiz-template")
const announcements = require("./routes/api/announcements")

const API_PORT = 3001;
const app = express();
const router = express.Router();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser.json());
const dbRoute = "mongodb+srv://minerva:minerva@minerva-c20xu.mongodb.net/minerva";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



// this is our update method
// this method overwrites existing data in our database
router.post("/updateQuiz", (req, res) => {
  
  const { quizTitle, problems, timeLimit, date, id} = req.body;
  
  
  QuizTemplate.findOneAndUpdate({"_id": id}, {$set: {"quizTitle": quizTitle, 
                                            "problems": problems, 
                                            "timelimit": timeLimit, 
                                            "date": date}},
                                            err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


//req.body is the object
router.post("/submitQuiz", (req, res) => {
  let quiz = new QuizTemplate();
  
  const { quizTitle, problems, timeLimit, date } = req.body;
  
  quiz.quizTitle = quizTitle;  
  quiz.problems = problems;
  quiz.timelimit = timeLimit;
  quiz.date = date;
  quiz.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


// get all quiz data
router.get("/getQuizzes", (req, res) => {
  QuizTemplate.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});


// append /api for our http requests
app.use("/api", router);

app.use("/api/announcements", announcements);
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));