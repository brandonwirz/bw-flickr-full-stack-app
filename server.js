const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 7000;
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))


// localhost:7000/flickr
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flickr",
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use("/flickr", require("./routes/imageRoutes"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port} starting at ${new Date()}`);
});
