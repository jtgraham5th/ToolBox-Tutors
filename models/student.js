const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

//Define our model
const studentSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});
//On save hook, encrypt password
studentSchema.pre("save", function(next) {
  const student = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(student.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      student.password = hash;
      next();
    });
  });
});
studentSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err)}

        callback(null, isMatch)
    });
}; 
//Create the model class
const ModelClass = mongoose.model("student", studentSchema);

//Export the model
module.exports = ModelClass;
