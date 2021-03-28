const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MySchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [{ answer: String, points: [{ nature: String, points: Number }] }]
});

const model = mongoose.model("question", MySchema);

module.exports = model;