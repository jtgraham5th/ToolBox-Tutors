const passport = require("passport");
const Student = require("../models/student");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
//Create local Strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  //verify this email and password,
  //call done with the email and password
  //otherwise, call done with false
  Student.findOne({ email: email }, function(err, student) {
    if (err) {
      return done(err);
    }
    if (!student) {
      return done(null, false);
    }

    //compare passwords - is 'password' equal to student.password
    student.comparePassword(password, function(err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      } else {
        return done(null, student);
      }
    });
  });
});
//Setup options for Jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  //See if user ID in the payload exists in our database
  //If it does call 'done' with that other
  //otherwise call 'done' with a user object
  Student.findById(payload.sub, function(err, student) {
    if (err) {
      return done(err, false);
    }
    if (student) {
      done(null, student);
    } else {
      done(null, false);
    }
  });
});

//Tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);
