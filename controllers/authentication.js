const jwt = require("jwt-simple");
const config = require("../config");
const Student = require("../models/student");
const Tutor = require("../models/tutor");
const Course = require("../models/course");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}
exports.tutorSignup = function(req, res, next) {
  const {
    email,
    password,
    firstName,
    lastName,
    subjects,
    availability,
    employmentStatus,
    education,
    resume
  } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide a email and password" });
  }
  // See if a user with the given email exists
  Tutor.findOne({ email: email }, function(err, existingStudent) {
    if (err) {
      return next(err);
    }
    //If a user with email does exist, return an error
    if (existingStudent) {
      return res.status(422).send({ error: "Email is in use" });
    }
    const tutor = new Tutor({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      subjects: subjects,
      availability: availability,
      employmentStatus: employmentStatus,
      education: education,
      resume: resume,
      summary: req.body.textarea
    });
    tutor.save(function(err) {
      if (err) {
        return next(err);
      }
      //respond to the request indicating User was created
      res.json({ token: tokenForUser(tutor) });
    });
  });
};
exports.studentSignup = function(req, res, next) {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide a email and password" });
  }
  // See if a user with the given email exists
  Student.findOne({ email: email }, function(err, existingStudent) {
    if (err) {
      return next(err);
    }
    //If a user with email does exist, return an error
    if (existingStudent) {
      return res.status(422).send({ error: "Email is in use" });
    }
    const student = new Student({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
    student.save(function(err) {
      if (err) {
        return next(err);
      }
      //respond to the request indicating User was created
      res.json({ token: tokenForUser(student) });
    });
  });
};
exports.tutorLogin = function(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide a email and password" });
  }
  // See if a user with the given email exists
  Tutor.findOne({ email: email }, function(err, existingTutor) {
    if (err) {
      return next(err);
    }
    existingTutor.comparePassword(password, function(err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    });
    //If a user with email does exist, return an error
    if (existingTutor) {
      return res.status(422).send({ error: "Email is in use" });
    }

    //User has already had their email and password auth'd
    //We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
  });
};
exports.studentLogin = function(req, res, next) {
  //User has already had their email and password auth'd
  //We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};
exports.addCourse = function(req, res, next) {
  const { subject, price, textarea } = req.body;
  if (!subject || !price) {
    return res
      .status(422)
      .send({ error: "You must provide a course name and price" });
  }
  Course.findOne({ courseName: subject }, function(err, existingCourse) {
    if (err) {
      return next(err);
    }
    //If a user with email does exist, return an error
    if (existingCourse) {
      return res.status(422).send({ error: "Course already exists" });
    }
    const course = new Course({
      courseName: subject,
      price: price,
      description: textarea
    });
    course.save(function(err) {
      if (err) {
        return next(err);
      }
      //respond to the request indicating User was created
      res.send({ msg: "Course Created Succesfully"});
    });
  });
};
