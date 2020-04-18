const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define our model
const courseSchema = new Schema({
  courseName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, unique: true },
});
 
//Create the model class
const ModelClass = mongoose.model("course", courseSchema);

//Export the model
module.exports = ModelClass;
