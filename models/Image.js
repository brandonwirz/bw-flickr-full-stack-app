const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: String,
    img: [String]
},
{usePushEach: true});

module.exports = mongoose.model("Save Image", imageSchema);
