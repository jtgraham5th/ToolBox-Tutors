//main starting point
require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

//DB Setup
var db = process.env.MONGODB_URI;
mongoose.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//App Setup
app.use(morgan("combined")); //morgan is used for logging incoming request (debugging)
app.use(cors());
app.use(bodyParser.json({ type: "*/*" })); //parse incoming request into json
router(app);

//Server Setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
