const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

//Define our model
const tutorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  subjects: [String],
  availability: [String],
  employmentStatus: { type: String, required: true },
  education: { type: String, required: true },
  resume: String,
  summary: String
});
//On save hook, encrypt password
tutorSchema.pre("save", function(next) {
  const tutor = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(tutor.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      tutor.password = hash;
      next();
    });
  });
});
tutorSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};
//Create the model class
const Tutor = mongoose.model("tutor", tutorSchema);

//Export the model
module.exports = Tutor;
