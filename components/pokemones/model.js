const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MySchema = new Schema({
  pokemon: {
    type: String,
    required: true
  },
  gender:{
      type: String,
      required: true
  },
  nature:{
      type:String,
      required:true
  }
});

const model = mongoose.model("pokemon", MySchema);

module.exports = model;